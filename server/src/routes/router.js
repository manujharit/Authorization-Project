const express = require('express')
const {loginValidator,signupValidator} = require('../validator/validator')
const {loginHandler, signupHandler} = require('../handler/handler')

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

module.exports = router;