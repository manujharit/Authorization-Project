import { useState } from "react"
import { Link } from "react-router-dom"
import { validateSignUp } from "../utils/validators"

const SignUp = ({ setUser }) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRepassword] = useState('')

    const handleChange = (event, fieldName) => {
        event.preventDefault()
        switch (fieldName) {
            case 'firstName':
                setFirstName(event.target.value)
                break;
            case 'lastName':
                setLastName(event.target.value)
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

    const handleSignUp = () => {
        if (validateSignUp({ firstName, lastName, email, password, repassword })) {
            setUser(email)
            window.open('/')
        } else {
            alert('The details are incorrect')
        }
    }

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card item-border" style={{ width: '500px' }}>
                <div className="card-title text-center" style={{ margin: '30px 30px 10px 30px' }}>
                    <h5><b>Welcome to Signup Page</b></h5>
                </div>
                <div className="card-body text-start" style={{ margin: '10px 30px 30px 30px' }}>
                    <form>
                        <div className="form-group">
                            <label className="form-label" style={{ display: 'inline-block', width: '150px' }}>First Name:</label>
                            <input type="text" className="form-control item-border" style={{ display: 'inline-block', width: 'calc(100% - 170px)' }} value={firstName} onChange={e => handleChange(e, 'firstName')} />
                            <br />
                            <br />
                        </div>
                        <div className="form-group">
                            <label className="form-label" style={{ display: 'inline-block', width: '150px' }}>Last Name:</label>
                            <input type="text" className="form-control item-border" style={{ display: 'inline-block', width: 'calc(100% - 170px)' }} value={lastName} onChange={e => handleChange(e, 'lastName')} />
                            <br />
                            <br />
                        </div>
                        <div className="form-group">
                            <label className="form-label" style={{ display: 'inline-block', width: '150px' }}>Email:</label>
                            <input type="text" className="form-control item-border" style={{ display: 'inline-block', width: 'calc(100% - 170px)' }} value={email} onChange={e => handleChange(e, 'email')} />
                            <br />
                            <br />
                        </div>
                        <div className="form-group">
                            <label className="form-label" style={{ display: 'inline-block', width: '150px' }}>Password:</label>
                            <input type="password" className="form-control item-border" style={{ display: 'inline-block', width: 'calc(100% - 170px)' }} value={password} onChange={e => handleChange(e, 'password')} />
                            <br />
                            <br />
                        </div>
                        <div className="form-group">
                            <label className="form-label" style={{ display: 'inline-block', width: '150px' }}>Re-enter Password:</label>
                            <input type="password" className="form-control item-border" style={{ display: 'inline-block', width: 'calc(100% - 170px)' }} value={repassword} onChange={e => handleChange(e, 'repassword')} />
                            <br />
                            <br />
                            <br />
                        </div>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-dark" onClick={() => handleSignUp()}>Submit</button>
                            <br/>
                            
                        </div>
                        <br/>
                            <Link to="/" className="d-flex justify-content-center">Click here to Login</Link>
                        
                    </form>
                </div>
            </div>
        </div>


    )
}

export default SignUp