const { verifyToken } = require('../utils/token');

const validateToken = (req, res, next) => {
    const bearerToken = req.headers.authorization;
    if (!bearerToken) {
        return res.status(401).json({
            message: 'Token not found',
        });
    }
    const token = bearerToken.split(' ')[1];
    const validToken = verifyToken(token);
    if (!validToken) {
        return res.status(401).json({
            message: 'Expired or invalid token',
        });
    }
    next();
};

module.exports = {
    validateToken,
};