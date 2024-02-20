const config = require('../config/config');

const redirectMiddleware = (req, res, next) => {
    if (res.statusCode === 404) {
        return res.redirect('/');
    }

    if (!isValidRoute(req.originalUrl)) {
        return res.redirect('/');
    }

    next();
};

const isValidRoute = (url) => {
    const validRoutes = ['/'];
    return validRoutes.includes(url);
};

module.exports = redirectMiddleware;
