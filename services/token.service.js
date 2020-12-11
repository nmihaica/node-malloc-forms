const crypto = require('crypto')

module.exports =  {
  issue: function () {
    let encoding = 'hex'
    const key = crypto.randomBytes(16);
    let token = Buffer.from(key).toString(encoding)
    return token 
  }
}
