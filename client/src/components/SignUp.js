import { useState } from "react"

const SignUp = () => {
    const [state,setState] = useState({
        username:'',
        password:'',
        repassword:'',
        firstName: '',
        lastName: ''
    })
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card item-border" style={{ width: '500px' }}>
                <div className="card-title text-center" style={{ margin: '30px 30px 10px 30px' }}>
                    <h5><b>Welcome to Signup Page</b></h5>
                </div>
                <div className="card-body text-start" style={{ margin: '10px 30px 30px 30px' }}>
                    <form>
                        <div className="form-group">
                            <label className="form-label" style={{ display: 'inline-block', width: '150px' }}>Enter First Name:</label>
                            <input type="text" className="form-control item-border" style={{ display: 'inline-block', width: 'calc(100% - 170px)' }} />
                            <br/>
                            <br/>
                        </div>
                        <div className="form-group">
                            <label className="form-label" style={{ display: 'inline-block', width: '150px' }}>Enter Last Name:</label>
                            <input type="text" className="form-control item-border" style={{ display: 'inline-block', width: 'calc(100% - 170px)' }} />
                            <br/>
                            <br/>
                        </div>
                        <div className="form-group">
                            <label className="form-label" style={{ display: 'inline-block', width: '150px' }}>Enter Email:</label>
                            <input type="text" className="form-control item-border" style={{ display: 'inline-block', width: 'calc(100% - 170px)' }} />
                            <br/>
                            <br/>
                        </div>
                        <div className="form-group">
                            <label className="form-label" style={{ display: 'inline-block', width: '150px' }}>Enter Password:</label>
                            <input type="password" className="form-control item-border" style={{ display: 'inline-block', width: 'calc(100% - 170px)' }} />
                            <br/>
                            <br/>
                        </div>
                        <div className="form-group">
                            <label className="form-label" style={{ display: 'inline-block', width: '150px' }}>Re-enter Password:</label>
                            <input type="password" className="form-control item-border" style={{ display: 'inline-block', width: 'calc(100% - 170px)' }} />
                            <br/>
                            <br/>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-dark">SignUp</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    )
}

export default SignUp