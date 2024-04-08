import { useState } from 'react';

const LoginPage = (props) => {

    const {setUsername, setLoggedIn} = props

    const [disabled, setDisabled] = useState(false)
    const [state, setState] = useState({
        username: '',
        password: '',
        error: '',
        loggedIn: false
    })

    const handleUsernameChange = (event) => {
        event.preventDefault()
        setState({
            ...state,
            username: event.target.value
        })
    }

    const handlePasswordChange = (event) => {
        event.preventDefault()
        setState({
            ...state,
            password: event.target.value
        })
    }

    const handleLogin = () => {
        if (validateUsername(state.username)) {
            setDisabled(true)
            setState({
                ...state,
                error: ''
            })
            if(state.password === "") {
                setState({
                    ...state,
                    error: ''
                })
            }
            else if (validatePassword(state.password)) {
                setState({
                    ...state,
                    error: ''
                })
                setLoggedIn(true)
                setUsername(state.username.split('@')[0])
                
            } else {
                setState({
                    ...state,
                    error: 'password'
                })
            }
        } else {
            setState({
                ...state,
                error: 'username'
            })
        }
    }

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card item-border" >
                <div className="card-title text-center" style={{ margin: '30px 30px 10px 30px' }}>
                    <h5><b>Welcome to Login Page</b></h5>
                </div>
                <div className="card-body text-start" style={{ margin: '10px 30px 30px 30px' }}>
                    <p>
                        <label className="form-label">Enter Username/Email :</label>
                        <input type="text" className="form-control item-border" value={state.username} onChange={(e) => handleUsernameChange(e)} disabled={disabled} />
                        {state.error === 'username' && <label style={{ color: "red" }}>Enter a valid Username</label>}
                    </p>
                    {
                        disabled && (
                            <p>
                                <label className="form-label">Enter Password :</label>
                                <input type="password" className="form-control item-border" value={state.password} onChange={(e) => handlePasswordChange(e)} />
                                {state.error === 'password' && <label style={{ color: "red" }}>Enter a valid Password</label>}
                                <br />
                            </p>
                        )
                    }
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-dark" onClick={handleLogin}>Login</button>
                        <button className="btn btn-dark" onClick={handleLogin}>Signup</button>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default LoginPage