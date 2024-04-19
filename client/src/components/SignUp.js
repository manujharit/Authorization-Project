import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { validateSignUp } from "../utils/validators"
import mailLogo from '../../assets/mailLogo.png'
import passwordLogo from '../../assets/passwordLogo.png'
import profileLogo from '../../assets/profileLogo.png'

const SignUp = ({ setUser }) => {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRepassword] = useState('')

    const handleChange = (event, fieldName) => {
        event.preventDefault()
        switch (fieldName) {
            case 'name':
                setName(event.target.value)
                break;
            case 'email':
                setEmail(event.target.value)
                break;
            case 'password':
                setPassword(event.target.value)
                break;
            case 'repassword':
                setRepassword(event.target.value)
                break;
            default:
                break;
        }
    }

    const handleSignUp = (event) => {
        event.preventDefault()
        if (validateSignUp({ name, email, password, repassword })) {
            setUser(email)
            navigate('/')
        } else {
            alert('Invalid Details')
        }
    }

    return (
        <form className="form">
            <div className='text-black text-left mb-10'>
                <p className='font-bold text-2xl'>Welcome Back :)</p>
                <p className='text-sm py-1'>To keep connected with us please singup.</p>
            </div>
            <div className="flex mb-4 mt-4 shadow appearance-none border border-solid border-cyan-800 rounded justify-center items-center">
                <img className='h-10 w-11 block rounded m-1 text-gray-700 font-bold text-xl bg-cyan-300' src={profileLogo} />
                <input
                    className=" w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => handleChange(e, 'name')}
                />
            </div>
            <div className="flex mb-4 mt-4 shadow appearance-none border border-solid border-cyan-800 rounded justify-center items-center">
                <img className='h-10 w-11 block rounded m-1 text-gray-700 font-bold text-xl bg-cyan-300' src={mailLogo} />
                <input
                    className=" w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Email"
                    value={email} onChange={e => handleChange(e, 'email')}
                />
            </div>
            <div className="flex mb-4 mt-6 shadow appearance-none border border-solid border-cyan-800 rounded justify-center items-center">
                <img className='h-10 p-1 w-11 block rounded m-1 text-gray-700 font-bold text-xl bg-cyan-300' src={passwordLogo} />
                <input
                    className=" w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={password} onChange={e => handleChange(e, 'password')}
                />
            </div><div className="flex mb-4 mt-6 shadow appearance-none border border-solid border-cyan-800 rounded justify-center items-center">
                <img className='h-10 p-1 w-11 block rounded m-1 text-gray-700 font-bold text-xl bg-cyan-300' src={passwordLogo} />
                <input
                    className=" w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="reenterpassword"
                    type="password"
                    placeholder="Re-enter Password"
                    value={repassword} onChange={e => handleChange(e, 'repassword')}
                />
            </div>

            <div className="flex items-center justify-center pt-4">
                <button
                    className="bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={(e) => handleSignUp(e)}
                >
                    Create Account
                </button>
            </div>
            <div className='flex items-center justify-center pt-4'>
                Already have an account?<Link to="/" className='text-blue-400 px-1 underline'>Login</Link>
            </div>
        </form>


    )
}

export default SignUp