export const validateUsername = (value) => {
    const regex = /^[a-zA-Z0-9]+(?:@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})?$/
    return regex.test(value)
}

export const validatePassword = (value) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[a-zA-Z\d!@#$%^&*(),.?":{}|<>]{8,}?$/
    return regex.test(value)
}

export const validateSignUp = ({ firstName, lastName, email, password, repassword }) => {
    if (validateName(firstName) && validateName(lastName) && validateEmail(email) && validatePassword(password) && validatePassword(repassword)) {
        if (password === repassword) {
            return true;
        }
        else {
            alert('Password and Re-Enter Password should match')
            return false
        }
    }
}

const validateName = (val) => {
    const regex = /[a-zA-Z]{1,20}/
    return regex.test(val)
}

const validateEmail = (val) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return regex.test(val)
}