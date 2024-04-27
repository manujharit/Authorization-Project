const jwt = require('jsonwebtoken')
const { SECRETKEY } = require('../config/config')
const { decrypt } = require('../../../lib/crypto')

const authenticateToken = async (req, res, next) => {
    const token = decrypt(req.headers['authorization'])

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' })
    }

    jwt.verify(token, SECRETKEY, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Forbidden' })
        }
        req.user = user,
            next()
    })
}

module.exports = { authenticateToken }