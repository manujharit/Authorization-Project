import passwordLogo from '../../assets/passwordLogo.png'
const Pin = ({ pin, setPin, error }) => {
    const handlePinChange = (event) => {
        event.preventDefault()
        setPin(event.target.value)
    }
    return (
        <div className=' mb-4 mt-6'>
            <div className="flex shadow appearance-none border border-solid border-cyan-800 rounded justify-center items-center">
                <img className='h-10 p-1 w-11 block rounded m-1 text-gray-700 font-bold text-xl bg-cyan-300' src={passwordLogo} />
                <input
                    className=" w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="pin"
                    type="password"
                    placeholder="Security Pin"
                    value={pin} onChange={(e) => handlePinChange(e)}
                />
            </div>
            {error && <div className="flex w-full justify-center text-sm mt-2 text-red-600">Incorrect Pin. Please enter a valid pin.</div>}
        </div>
    )
}

export default Pin