import mailLogo from '../../assets/mailLogo.png'

const Email = ({ emailId, setEmailId, error, errMessage }) => {

    const handleEmailChange = (event) => {
        event.preventDefault()
        setEmailId(event.target.value)
    }

    return (<div className="mb-4 mt-4">
        <div className="flex shadow appearance-none border border-solid border-cyan-800 rounded justify-center items-center">
            <img className='h-10 w-11 block rounded m-1 text-gray-700 font-bold text-xl bg-cyan-300' src={mailLogo} />
            <input
                className=" w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Email"
                value={emailId} onChange={(e) => handleEmailChange(e)}
            />
        </div>
        {error && <div className="flex w-full justify-center text-sm mt-2 text-red-600">{errMessage}</div>}
    </div>
    )
}

export default Email