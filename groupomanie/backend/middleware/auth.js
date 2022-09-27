const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.RANDOM_TOKEN_SECRET);
        if (decodedToken.adminId) {
            const adminId = decodedToken.adminId;
            req.auth = { adminId: adminId };
        }
        if (decodedToken.userId) {
            const userId = decodedToken.userId;
            req.auth = { userId: userId };
        }
        next();
    } catch (error) {
        res.status(401).json({ error });
    }
};

