const jwt = require('jsonwebtoken');
let errorCodes = require('./error_codes.json');
const { JWT_SECRET, JWT_EXPIRY } = process.env;

class JWT {

  parseToken(token) {
    let decodedToken = null;
    // Return if Bearer is NOT present
    if (token.split(' ')[0].toLowerCase() !== 'Bearer'.toLowerCase()) {
      return errorCodes.ILLEGAL_JWT_TOKEN;
    }

    // Check for valid JWT token
    jwt.verify(
      token.split(' ')[1],
      JWT_SECRET,
      (err, decoded) => {
        if (!err) {
          decodedToken = decoded;
        } else {
          decodedToken = false;
        }
      }
    );
    return decodedToken;
  }

  createJWTToken(userObject) {
    const token = jwt.sign(userObject, JWT_SECRET, {
      expiresIn: JWT_EXPIRY
    });
    return token;
  }

  checkForAuthorizationToken(req, res, next) {
    const token = req.headers.authorization;
    if (
      req.headers.authorization === '' ||
      req.headers.authorization === undefined ||
      req.headers.authorization === null
    ) {
      return res.status(401).send(errorCodes.AUTHORIZATION_HEADER);
    }

    if (req.headers.authorization.split(' ')[0].toLowerCase() !== 'Bearer'.toLowerCase()) {
      return res.status(401).send(errorCodes.BEARER_NOT_FOUND);
    }

    jwt.verify(
      token.split(' ')[1],
      JWT_SECRET,
      (err, decoded) => {
        if (!err) {
          req.userObj = decoded
          // next();
        } else {
          return res.status(401).send(errorCodes.ILLEGAL_JWT_TOKEN);
        }
      }
    );
    
    next();
  }

}

module.exports = new JWT();