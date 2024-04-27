const express = require('express')
const { loginValidator, signupValidator, checkEmailValidator } = require('../validator/validator')
const { loginHandler, signupHandler, checkEmailHandler } = require('../handler/handler');
const {authenticateToken} = require('../middleware/tokenMiddleware')

const router = express.Router();

router.post(
    '/login',
    loginValidator,
    loginHandler
)

router.post(
    '/signup',
    signupValidator,
    signupHandler
)

router.post(
    '/checkemail',
    checkEmailValidator,
    checkEmailHandler

)

router.post(
    '/access',
    authenticateToken,
    // accessTokenHandler
)

module.exports = router;