const crypto = require('crypto');

// Generate a random secure secret key
const secretKey = crypto.randomBytes(32).toString('hex');

console.log('Generated Secret Key:', secretKey);

// the secret key is: b50c653d2d2d4aa7b1125663bc1153319789c3c665c8033cd70fa663da29b7c3