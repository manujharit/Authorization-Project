import { useState } from 'react';
import { validateUsername, validatePassword } from '../utils/validators';
import { Link } from 'react-router-dom';
import LoggedIn from './LoggedIn';

const LoginPage = (props) => {
    const { user, setUser } = props
    const [loggedIn, setLoggedIn] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const [state, setState] = useState({
        username: user,
        password: ''
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
            if (state.password === '') {
                setDisabled(true)
            }
            else if (validatePassword(state.password)) {
                setUser(state.username || state.username.split('@')[0])
                setLoggedIn(true)
            } else {
                alert("Invalid Username or Password")
                setState({
                    ...state,
                    password: ''
                })
            }
        } else {
            alert("Invalid Username")
            setState({
                ...state,
                username: ''
            })
        }
    }

    return loggedIn ? <LoggedIn user={user} /> : (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card item-border" >
                <div className="card-title text-center" style={{ margin: '30px 30px 10px 30px' }}>
                    <h5><b>Welcome to Login Page</b></h5>
                </div>
                <div className="card-body text-start" style={{ margin: '10px 30px 30px 30px' }}>
                    <p>
                        <label className="form-label">Enter Username/Email :</label>
                        <input type="text" className="form-control item-border" value={state.username} onChange={(e) => handleUsernameChange(e)} disabled={disabled} />
                    </p>
                    {
                        disabled && (
                            <p>
                                <label className="form-label">Enter Password :</label>
                                <input type="password" className="form-control item-border" value={state.password} onChange={(e) => handlePasswordChange(e)} />
                            </p>
                        )
                    }
                    <br/>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-dark" onClick={() => handleLogin()}>Login</button>
                    </div>
                    <br/>
                    <Link to="/signup" className='d-flex justify-content-center'>Click here to create a new account</Link>
                </div>

            </div>
        </div>
    )
}


export default LoginPage