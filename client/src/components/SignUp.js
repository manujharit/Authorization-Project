import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import FormInput from './FormInput';
import { validateSignUp } from '../utils/validators';
import mailLogo from '../../assets/mailLogo.png';
import passwordLogo from '../../assets/passwordLogo.png';
import profileLogo from '../../assets/profileLogo.png';
import FormInput from './FormInput';

const SignUp = ({ setUser }) => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    if (validateSignUp(data)) {
      setUser(data.email);
      navigate('/');
    } else {
      alert('Invalid Details');
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="text-black text-left mb-10">
        <p className="font-bold text-2xl">Welcome Back :)</p>
        <p className="text-sm py-1">To keep connected with us please singup.</p>
      </div>
      <FormInput
        name="name"
        placeholder="Name"
        icon={profileLogo}
        register={register}
        errors={errors}
        validation={{ required: 'Name is required' }}
      />
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
      <FormInput
        name="repassword"
        type="password"
        placeholder="Re-enter Password"
        icon={passwordLogo}
        register={register}
        errors={errors}
        validation={{ required: 'Re-enter Password is required', minLength: 6 }}
      />
      <div className="flex items-center justify-center pt-4">
        <button
          className="bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Create Account
        </button>
      </div>
      <div className="flex items-center justify-center pt-4">
        Already have an account?
        <Link to="/" className="text-blue-400 px-1 underline">
          Login
        </Link>
      </div>
    </form>
  );
};

export default SignUp;