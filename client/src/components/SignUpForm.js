import mailLogo from '../../assets/mailLogo.png'
import passwordLogo from '../../assets/passwordLogo.png'
import profileLogo from '../../assets/profileLogo.png'

const SignUpForm = ({ name, setName, pin, setPin, password, setPassword, repassword, setRepassword }) => {

    const handleChange = (event, fieldName) => {
        event.preventDefault()
        switch (fieldName) {
            case 'name':
                setName(event.target.value)
                break;
            case 'password':
                setPassword(event.target.value)
                break;
            case 'repassword':
                setRepassword(event.target.value)
                break;
            case 'pin':
                setPin(event.target.value)
                break;
            default:
                break;
        }
    }
    return (
        <>
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
                    id="securityPin"
                    type="text"
                    placeholder="Security PIN"
                    value={pin} onChange={e => handleChange(e, 'pin')}
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
        </>
    )
}

export default SignUpForm;