const MongoClient = require('../model/mongoClient')

const loginHandler = async (req, res, next) => {
    try {
        const body = req.body
        //Decryption happens here
        const { email } = body
        if (email) {
            const message = await MongoClient.loginUser(body)
            res.status(message.statusCode).json(message?.message)
        }
    } catch (err) {
        res.status(500).json(err.message)
    }
}

const signupHandler = async (req, res, next) => {
    try {
        const user = req.body
        //decryption
        const resp = await MongoClient.signupUser(user)
        res.status(resp.statusCode).json(resp.message)

    } catch (err) {
        res.status(500).json(err.message)
    }
}

const checkEmailHandler = async (req, res, next) => {
    try {
        const { email } = req.body
        const resp = await MongoClient.checkEmail(email)
        res.status(200).json({ checkEmail: resp })
    } catch (err) {
        res.status(500).json(err.message)
    }
}

module.exports = { loginHandler, signupHandler, checkEmailHandler }