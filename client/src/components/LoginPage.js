import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import FormInput from './FormInput';
import { validateLogin } from '../utils/validators';
import LoggedIn from './LoggedIn';
import mailLogo from '../../assets/mailLogo.png';
import passwordLogo from '../../assets/passwordLogo.png';
import FormInput from './FormInput';

const LoginPage = ({ user, setUser }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    if (validateLogin(data)) {
      setUser(data.email);
    }
  };

  return user ? (
    <LoggedIn user={user} />
  ) : (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="text-black text-left mb-10">
        <p className="font-bold text-2xl">Welcome :)</p>
        <p className="text-sm py-1">
          To keep connected with us please login with your credentials.
        </p>
      </div>
      <FormInput
        name="email"
        placeholder="Email"
        icon={mailLogo}
        register={register}
        errors={errors}
        validation={{ required: 'Email is required', pattern: /^\S+@\S+$/i }}
      />
      <FormInput
        name="password"
        type="password"
        placeholder="Password"
        icon={passwordLogo}
        register={register}
        errors={errors}
        validation={{ required: 'Password is required', minLength: 6 }}
      />
      <div className="flex mb-4">
        <label className="flex w-1/2 justify-start">
          <input type="checkbox" className="mr-2" />
          <span className="text-xs text-gray-400">Remember Me</span>
        </label>
        <label className="flex w-1/2 justify-end">
          <span className="text-xs text-blue-400 underline">
            Forgot Password?
          </span>
        </label>
      </div>
      <div className="flex items-center justify-center">
        <button
          className="bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Login
        </button>
      </div>
      <div className="flex items-center justify-center pt-4">
        Don't have an account?
        <Link to="/signup" className="text-blue-400 px-1 underline">
          Create
        </Link>
      </div>
    </form>
  );
};

export default LoginPage;