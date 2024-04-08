// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginPage from "./components/LoginPage";
import LoggedIn from "./components/LoggedIn";
import SignUp from "./components/SignUp";
import { connect } from "react-redux";
import { setLoggedIn, setUsername } from "./redux/action";



const App = (props) => {
    const {loggedIn, username , setLoggedIn, setUsername} = props
    // return loggedIn ? <LoggedIn username={username}/> : <LoginPage setUsername={setUsername} setLoggedIn={setLoggedIn}/>
    return <SignUp/>
}

const mapStoreToProps = (state) => ({
    username:state.username,
    loggedIn: state.loggedIn
})

const mapDispatchToProps = {
    setUsername,
    setLoggedIn
}


export default connect(mapStoreToProps, mapDispatchToProps)(App);