const JWTService = require('./jwt.service');
// usually: "Authorization: Bearer [token]" or "token: [token]"

module.exports = (req, reply, next) => {
  let tokenToVerify;
  if (req.headers['authorization']) {
    const parts = req.headers['authorization'].split(' ');
    
    if (parts.length === 2) {
      const scheme = parts[0];
      const credentials = parts[1];

      if (/^Bearer$/.test(scheme)) {
        tokenToVerify = credentials;
      } else {
        return reply.status(401).send({ msg: 'Format for authorization: Bearer [token]' });
      }
    } else {
      return reply.status(401).send({ msg: 'Format for authorization: Bearer [token]' });
    }
  } else if (req.body && req.body.token) {
    tokenToVerify = req.body.token;
    delete req.query.token;
  } else {
    return reply.status(401).send({ msg: 'No authorization was found' });
  }

  return JWTService().verify(tokenToVerify, (err, thisToken) => {
    if (err) return reply.status(401).send({ err });
    req.token = thisToken;
    return next();
  });
}