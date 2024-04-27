const { checkUser, postUser } = require('../lib/mongoClient')
const jwt = require('jsonwebtoken')
const { SECRETKEY } = require('../config/config')
const { hashPassword } = require('../../../lib/crypto')


const checkUserCred = async (body) => {
    try {
        const user = await checkUser(body)
        const { pin, password } = body

        if ((user && !pin && !password) || (user && pin && !password)) return { statusCode: 200 };
        if ((!user && !pin && !password) || (!user && pin && !password) || (!user && pin && password)) return { statusCode: 401 };

        const token = jwt.sign({ user:{ email: user.email, name: user.name} }, SECRETKEY, { expiresIn: '1h' })


        return { statusCode: 200, token: token };

    } catch (err) {
        throw err
    }
}

const postUserCred = async ({ name, email, pin, password }) => {
    try {
        const hashedPin = hashPassword(pin)
        const hashedPassword = hashPassword(password)
        const res = await postUser({ name, email, pin: hashedPin, password: hashedPassword })
        if (!res) {
            return { statusCode: 409, message: 'User already exists' };
        }
        return { statusCode: 201, message: 'Created' }
    } catch (err) {
        throw err
    }
}

const getJwt = async (user) => {
    const jwtToken = jwt.sign({ email: user.email, name: user.name }, SECRETKEY)
    return jwtToken
}


module.exports = { checkUserCred, postUserCred, getJwt }