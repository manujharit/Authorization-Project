

const config = {
    REGEX: {
        NAME: /[a-zA-Z]{1,20}/,
        USERNAME: /^[a-zA-Z0-9]+$/,
        EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[a-zA-Z\d!@#$%^&*(),.?":{}|<>]{8,}?$/
    }
}

module.exports = config