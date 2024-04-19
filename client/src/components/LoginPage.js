import { useState } from 'react';
import { validateLogin } from '../utils/validators';
import { Link } from 'react-router-dom';
import LoggedIn from './LoggedIn';
import mailLogo from '../../assets/mailLogo.png'
import passwordLogo from '../../assets/passwordLogo.png'

const LoginPage = (props) => {
    const { user, setUser } = props
    const [loggedIn, setLoggedIn] = useState(false)
    const [email, setEmail] = useState(user)
    const [password, setPassword] = useState('')


    const handleEmailChange = (event) => {
        event.preventDefault()
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        event.preventDefault()
        setPassword(event.target.value)
    }

    const handleLogin = () => {
        if (validateLogin({ email, password })) {
            setUser(email)
            setLoggedIn(true)
        }
    }

    return loggedIn ? <LoggedIn user={user} /> : (
        <form className="form">
            <div className='text-black text-left mb-10'>
                <p className='font-bold text-2xl'>Welcome :)</p>
                <p className='text-sm py-1'>To keep connected with us please login with your credentials.</p>
            </div>
            <div className="flex mb-4 mt-4 shadow appearance-none border border-solid border-cyan-800 rounded justify-center items-center">
                <img className='h-10 w-11 block rounded m-1 text-gray-700 font-bold text-xl bg-cyan-300' src={mailLogo} />
                <input
                    className=" w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="text"
                    placeholder="Email"
                    value={email} onChange={(e) => handleEmailChange(e)}
                />
            </div>
            <div className="flex mb-4 mt-6 shadow appearance-none border border-solid border-cyan-800 rounded justify-center items-center">
                <img className='h-10 p-1 w-11 block rounded m-1 text-gray-700 font-bold text-xl bg-cyan-300' src={passwordLogo} />
                <input
                    className=" w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={password} onChange={(e) => handlePasswordChange(e)}
                />
            </div>
            <div className='flex mb-4'>
                <label className="flex w-1/2 justify-start">
                    <input type='checkbox' className="mr-2" />
                    <span className='text-xs text-gray-400'>Remember Me</span>
                </label>
                <label className="flex w-1/2 justify-end">
                    <span className='text-xs text-blue-400 underline'>Forgot Password?</span>
                </label>
            </div>
            <div className="flex items-center justify-center">
                <button
                    className="bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={() => handleLogin()}
                >
                    Login
                </button>
            </div>
            <div className='flex items-center justify-center pt-4'>
                Don't have an account?<Link to="/signup" className='text-blue-400 px-1 underline'>Create</Link>
            </div>
        </form>
    )
}


export default LoginPage