export const validateUsername = (value) => {
    const regex = /^[a-zA-Z0-9]+(?:@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})?$/
    return regex.test(value)
}

export const validatePassword = (value) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}?$/
    return regex.test(value)
}