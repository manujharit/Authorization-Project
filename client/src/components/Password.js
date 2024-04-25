import passwordLogo from '../../assets/passwordLogo.png'
const Password = ({ password, setPassword, error }) => {
    
    const handlePasswordChange = (event) => {
        event.preventDefault()
        setPassword(event.target.value)
    }

    return (
        <>
            <div className='mb-4 mt-6'>
                <div className="flex  shadow appearance-none border border-solid border-cyan-800 rounded justify-center items-center">
                    <img className='h-10 p-1 w-11 block rounded m-1 text-gray-700 font-bold text-xl bg-cyan-300' src={passwordLogo} />
                    <input
                        className=" w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Password"
                        value={password} onChange={(e) => handlePasswordChange(e)}
                    />
                </div>
                {error && <div className="flex w-full justify-center text-sm mt-2 text-red-600">Incorrect Password. Please enter your correct password.</div>}
            </div>
            <div className='flex mb-4'>
                <label className="flex w-1/2 justify-start">
                    <input type='checkbox' className="mr-2" />
                    <span className='text-xs text-gray-400'>Remember Me</span>
                </label>
                <label className="flex w-full justify-end">
                    <span className='text-xs text-blue-400 underline'>Forgot Password?</span>
                </label>
            </div>
        </>
    )
}

export default Password;