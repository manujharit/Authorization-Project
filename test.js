const crypto = require('crypto');

// Generate a random key of appropriate length (e.g., 256 bits)
const key = crypto.randomBytes(32); // 32 bytes = 256 bits

// Convert the key to a hexadecimal string
const hashSecret = key.toString('hex');

console.log(hashSecret);