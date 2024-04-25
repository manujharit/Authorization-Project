const validateName = (value) => {
    const regex = /[a-zA-Z]{1,40}/
    return regex.test(value)
}

const validatePassword = (value) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[a-zA-Z\d!@#$%^&*(),.?":{}|<>]{8,}?$/
    return regex.test(value)
}

const validatePin = (value) => {
    const regex = /[0-9]{6}/
    return regex.test(value)
}

export const validateEmail = (val) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return regex.test(val)
}

export const validateSignUp = ({ name, emailId, pin, password, repassword }) => {
    if (emailId && !name && !pin && !password && !repassword) return validateEmail(emailId)
    if (validateName(name) && validateEmail(emailId) && validatePin(pin) && validatePassword(password) && validatePassword(repassword)) {
        if (password === repassword) {
            return true;
        }
        else {
            alert('Password and Re-Enter Password should match')
            return false
        }
    }
}

export const validateLogin = ({ emailId, pin, password }) => {
    if (emailId && !pin && !password) return validateEmail(emailId)
    if (emailId && pin && !password) return validateEmail(emailId) && validatePin(pin)
    if (emailId && pin && password) return validateEmail(emailId) && validatePin(pin) && validatePassword(password)
    alert('Incorrect details')
    return false
}

