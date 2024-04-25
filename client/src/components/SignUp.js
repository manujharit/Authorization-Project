import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { validateSignUp } from "../utils/validators"
import Email from "./Email"

import SignUpForm from "./signupForm"
import { checkEmail, signup } from "../utils/utils"

const SignUp = ({ setEmail }) => {
    const navigate = useNavigate()

    const errMessage = 'An account already exists with this email. Please login or use different account.'
    const [name, setName] = useState('')
    const [emailId, setEmailId] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRepassword] = useState('')
    const [pin, setPin] = useState('')
    const [error, setError] = useState(false)
    const [step, setStep] = useState(1)



    const handleSignUp = async (event) => {
        event.preventDefault()
        if (validateSignUp({ name, emailId, pin, password, repassword })) {
            if (step === 1) {
                const resp = await checkEmail(emailId)
                if (resp) {
                    setError(true)
                } else {
                    setStep(step + 1)
                    setError(false)
                }
            } else if (step === 2) {
                const resp = await signup({ name, emailId, pin, password })
                if (resp.status !== 201) {
                    setError(true)
                } else {
                    console.log(emailId)
                    setError(false)
                    setEmail(emailId)
                    navigate('/')
                }
            }
            // 
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

            {step === 1 && <Email emailId={emailId} setEmailId={setEmailId} error={error} errMessage={errMessage} />}
            {step === 2 && <SignUpForm name={name} setName={setName} pin={pin} setPin={setPin} password={password} setPassword={setPassword} repassword={repassword} setRepassword={setRepassword} />}


            <div className="flex items-center justify-center pt-4">
                <button
                    className="bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={(e) => handleSignUp(e)}
                >
                    Submit
                </button>
            </div>
            <div className='flex items-center justify-center pt-4'>
                Already have an account?<Link to="/" className='text-blue-400 px-1 underline'>Login</Link>
            </div>
        </form>


    )
}

export default SignUp