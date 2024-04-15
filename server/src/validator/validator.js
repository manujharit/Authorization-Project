const Joi = require('joi')

const { REGEX } = require('../config/config')

// const { REGEX } = CONFI

const loginSchema = Joi.object({
    username: Joi.string().regex(REGEX.USERNAME).optional(),
    email: Joi.string().regex(REGEX.EMAIL).optional(),
    password: Joi.string().regex(REGEX.PASSWORD).optional()
}).or('username', 'email').required()


const signupSchema = Joi.object({
    firstName: Joi.string().regex(REGEX.NAME).required(),
    lastName: Joi.string().regex(REGEX.NAME).optional(),
    username: Joi.string().regex(REGEX.USERNAME).required(),
    email: Joi.string().regex(REGEX.EMAIL).required(),
    password: Joi.string().regex(REGEX.PASSWORD).required(),
}).required()

const loginValidator = (req, res, next) => {
    if (loginSchema.validate(req.body).error) {
        res.status(400).json('Invalid Data')
    } else {
        next()
    }
}

const signupValidator = (req,res,next) => {
    if(signupSchema.validate(req.body).error){
        res.status(400).json('Invalid Data')
    } else { 
        next()
    }
}

module.exports = {loginValidator,signupValidator};