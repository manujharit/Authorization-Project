import { useState } from 'react';
import { validateLogin } from '../utils/validators';
import { Link } from 'react-router-dom';
import { login, checkEmail } from '../utils/utils'
import LoggedIn from './LoggedIn';
import Email from './Email'
import Pin from './Pin'
import Password from './Password';

const LoginPage = (props) => {
    const { user, setUser, email } = props
    const errMessage = "We couldn't find an account with that username. Please Sign Up or try another"
    const [step, setStep] = useState(1)
    const [error, setError] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false)
    const [emailId, setEmailId] = useState(email)
    const [pin, setPin] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async () => {
        console.log(validateLogin({ emailId, pin, password }))
        if (validateLogin({ emailId, pin, password })) {
            if (step === 1) {
                const resp = await checkEmail(emailId)
                if (!resp) {
                    setError(true)
                } else {
                    setStep(step + 1)
                    setError(false)
                }
            }
            if (step === 2) {
                const resp = await login({ email:emailId, pin })
                if (resp.status !== 200) {
                    setError(true)
                } else {
                    setError(false)
                    setStep(step + 1)
                }
            }
            if (step === 3) {
                const resp = await login({ email:emailId, pin, password })
                if (resp.status !== 200) {
                    setError(true)
                } else {
                    setError(false)
                    setUser(resp.data)
                    setLoggedIn(true)
                }
            }

        }
    }

    return loggedIn ? <LoggedIn user={user} /> : (
        <form className="form">
            <div className='text-black text-left mb-10'>
                <p className='font-bold text-2xl'>Welcome :)</p>
                <p className='text-sm py-1'>To keep connected with us please login with your credentials.</p>
            </div>
            {step === 1 && <Email emailId={emailId} setEmailId={setEmailId} error={error} errMessage={errMessage} />}
            {step === 2 && <Pin pin={pin} setPin={setPin} error={error} />}
            {step === 3 && <Password password={password} setPassword={setPassword} error={error} />}


            <div className="flex items-center justify-center">
                <button
                    className="bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={() => handleLogin()}
                >
                    Submit
                </button>
            </div>


            {step === 1 && <div className='flex items-center justify-center pt-4'>
                Don't have an account?<Link to="/signup" className='text-blue-400 px-1 underline'>Create One!</Link>
            </div>}
        </form>
    )
}


export default LoginPage