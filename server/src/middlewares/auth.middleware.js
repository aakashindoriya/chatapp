const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send('No token provided');
  }

  try {
    const token = authHeader
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      const refreshToken = req.headers.refreshtoken;
      if (!refreshToken) {
        return res.status(401).send('No refresh token provided');
      }

      try {
        const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
        const payload = { user: decoded.user };
        const newToken = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
        req.user = decoded.user;
        res.set('Authorization', `${newToken}`);
        next();
      } catch (err) {
        console.error(err);
        res.status(401).send('Invalid refresh token');
      }
    } else {
      console.error(err);
      res.status(401).send('Invalid access token');
    }
  }
};

module.exports = authMiddleware;
