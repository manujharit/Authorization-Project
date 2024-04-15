const Model = require('../model/model')

const loginHandler = async (req, res, next) => {
    try {
        const body = req.body
        //Decryption happens here
        const { username, email, password } = body
        if (username) {
            const user = await Model.find({ username: username }, { _id: 0, _v: 0 })
            if (!password) {
                if (user.length) {
                    res.status(200).json('Valid User')
                } else {
                    res.status(404).json('Username Not Found')
                }
            } else {
                if (password === user[0].password) {
                    res.status(200).json('Authenticated')
                } else {
                    res.status(401).json('Unauthorized')
                }
            }
        } else if (email) {
            const user = await Model.find({ email: email }, { _id: 0, _v: 0 })
            if (!password) {
                if (user.length) {
                    res.status(200).json('Valid User')
                } else {
                    res.status(404).json('Username Not Found')
                }
            } else {
                if (password === user[0].password) {
                    res.status(200).json('Authenticated')
                } else {
                    res.status(401).json('Unauthorized')
                }
            }
        }
    } catch (err) {
        res.send(500).json(err.message)
    }
}

const signupHandler = async (req, res, next) => {
    try {
        const body = req.body
        //decryption
        const { username } = body
        const user = await Model.find({ username: username }, { _id: 0, _v: 0 })
        if (user.length) {
            res.status(409).json('Username already exists')
        } else {
            await Model.create(body)
            res.status(201).json('Created')
        }
    } catch (err) {
        res.status(500).json(err.message)
    }
}

module.exports = { loginHandler, signupHandler }