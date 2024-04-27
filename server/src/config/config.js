require('dotenv').config({ path: '../.env' })


const config = {
    REGEX: {
        NAME: /[a-zA-Z]{1,40}/,
        PIN: /[0-9]{6}/,
        EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[a-zA-Z\d!@#$%^&*(),.?":{}|<>]{8,}?$/
    },
    SECRETKEY: process.env.JWTKEY,
    MONGODB: {
        URL: process.env.MONGODB_URL,
        DB: process.env.MONGODB_DB,
        COLLECTION: process.env.MONGODB_COLLECTION
    }
}

module.exports = config