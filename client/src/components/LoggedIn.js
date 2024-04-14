
const LoggedIn = (props) => {
    const { user } = props
    return (
        <>
        <br/>
        <div className="d-flex justify-content-center align-items-center">
            <div className="text-success me-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
                    <path d="M11.354 4.646a.5.5 0 0 1 .708.708l-5 5a.5.5 0 0 1-.708 0l-2.5-2.5a.5.5 0 1 1 .708-.708L6 9.793l4.646-4.647a.5.5 0 0 1 .708 0z" />
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zm0 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1z" />
                </svg>
            </div>
            <div>
                <h3>Logged In Successfully</h3>
            </div>
            
        </div>
        <br/>
        <br/>
        <div className="d-flex justify-content-center align-items-center">
        <h2>Welcome {user}</h2>
        </div>
        </>
    )
}

export default LoggedIn;