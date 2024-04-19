const validateUsername = (value) => {
    const regex = /^[a-zA-Z0-9]+(?:@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})?$/
    return regex.test(value)
}

const validatePassword = (value) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[a-zA-Z\d!@#$%^&*(),.?":{}|<>]{8,}?$/
    return regex.test(value)
}

export const validateSignUp = ({ username, email, password, repassword }) => {
    if (validateUsername(username) && validateEmail(email) && validatePassword(password) && validatePassword(repassword)) {
        if (password === repassword) {
            return true;
        }
        else {
            alert('Password and Re-Enter Password should match')
            return false
        }
    }
}

export const validateLogin = ({ email, password }) => {
    if (validateEmail(email) && validatePassword(password)) {
        return true
    }
    return false
}

const validateEmail = (val) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return regex.test(val)
}