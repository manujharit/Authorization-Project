const { checkUserCred, postUserCred, getJwt } = require('../helper/helper')
const { checkEmail } = require('../lib/mongoClient')

const { encrypt, decrypt } = require('../../../lib/crypto')

const loginHandler = async (req, res, next) => {
    try {
        const body = req.body
        const { email } = body
        if (email) {
            const message = await checkUserCred(body)
            res.status(message.statusCode).json({ token: encrypt(message?.token) })
        }
    } catch (err) {
        res.status(500).json({ error: err?.message })
    }
}

const signupHandler = async (req, res, next) => {
    try {
        const user = req.body
        //decryption
        const resp = await postUserCred(user)
        res.status(resp.statusCode).json(resp.message)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

const checkEmailHandler = async (req, res, next) => {
    try {
        const { email } = req.body
        const resp = await checkEmail(email)
        res.status(200).json({ checkEmail: resp })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

const accessTokenHandler = async (req, res, next) => {
    try {
        const user = req.user.user
        const jwtToken = await getJwt(user)
        res.status(200).json({ id: jwtToken })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

module.exports = { loginHandler, signupHandler, checkEmailHandler, accessTokenHandler }