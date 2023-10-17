import jwt from 'jsonwebtoken';

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'gunesh', {
    expiresIn: '1d',
  });
};

export default generateToken;
