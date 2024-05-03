const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

const isAuth = async (req, res, next) => {
  const auth = req.get('Authorization');
  if (!(auth && auth.startsWith('Bearer '))) {
    res.json({ success: false, message: 'Auth error' });
  }
  const token = auth.split(' ')[1];
  jwt.verify(token, secret, (error, decoded) => {
    if (error) {
      res.json({ success: false, message: 'Auth error' });
    } else {
      req.userID = decoded.uid;
      req.role = decoded.rol;
      // console.log(req);
      next();
    }
  });
};

module.exports = isAuth;
