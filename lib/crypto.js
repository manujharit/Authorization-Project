const CryptoJS = require('crypto-js')
require('dotenv').config({ path: '../.env' })

const HASHKEY = process.env.HASHKEY
const HASHSECRET = process.env.HASHSECRET

const EncyptionKey = CryptoJS.HmacSHA256(HASHKEY, HASHSECRET).toString()

const hashPassword = (password) => {
    return CryptoJS.HmacSHA256(password, HASHSECRET).toString(CryptoJS.enc.Hex)
}

const encrypt = (key) => {
    return CryptoJS.AES.encrypt(key, EncyptionKey).toString();

}

const decrypt = (key) => {
    return CryptoJS.AES.decrypt(key, EncyptionKey).toString(CryptoJS.enc.Utf8)
}


module.exports = { hashPassword, encrypt, decrypt }