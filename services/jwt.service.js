const jwt = require('jsonwebtoken');

const secret = process.env.NODE_ENV === 'production' ? process.env.JWT_SECRET : 'snjeguljica';

const authService = () => {
  const issue = (payload) => jwt.sign(payload, secret, { expiresIn: '3h' }); // 3 hours default
  const verify = (token, cb) => jwt.verify(token, secret, {}, cb);

  return {
    issue,
    verify,
  };
};

module.exports = authService;