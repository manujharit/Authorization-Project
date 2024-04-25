const Joi = require('joi')

const { REGEX } = require('../config/config')

// const { REGEX } = CONFI

const loginSchema = Joi.object({
    email: Joi.string().regex(REGEX.EMAIL).required(),
    pin: Joi.string().regex(REGEX.PIN).optional(),
    password: Joi.string().regex(REGEX.PASSWORD).optional()
}).required()


const signupSchema = Joi.object({
    name: Joi.string().regex(REGEX.NAME).required(),
    email: Joi.string().regex(REGEX.EMAIL).required(),
    pin: Joi.string().regex(REGEX.PIN).required(),
    password: Joi.string().regex(REGEX.PASSWORD).required(),
}).required()

const checkEmailSchema = Joi.object({
    email: Joi.string().regex(REGEX.EMAIL).required()
}).required()

const loginValidator = (req, res, next) => {
    if (loginSchema.validate(req.body).error) {
        res.status(400).json('Invalid Login Data')
    } else {
        next()
    }
}

const signupValidator = (req, res, next) => {
    if (signupSchema.validate(req.body).error) {
        res.status(400).json('Invalid Signup Data')
    } else {
        next()
    }
}

const checkEmailValidator = (req, res, next) => {
    if (checkEmailSchema.validate(req.body).error) {
        res.status(400).json('Invalid Email Schema')
    } else {
        next()
    }
}

module.exports = { loginValidator, signupValidator, checkEmailValidator };