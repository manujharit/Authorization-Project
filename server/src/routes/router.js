const express = require('express')
const {loginHandler, signupHandler} = require('../handler/handler')

const router = express.Router();

router.post(
    '/login',
    loginHandler
)

router.post(
    '/signup',
    signupHandler
)

module.exports = router;