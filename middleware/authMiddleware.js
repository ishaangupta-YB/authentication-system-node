const jwt = require('jsonwebtoken');
const config = require('../config/config');
const User = require('../models/user');

module.exports = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            if (req.originalUrl !== '/') {
                return res.status(200).redirect('/');
            }
            return next();
        }
        const decodedToken = jwt.verify(token, config.jwtSecret);

        req.user = await User.findById(decodedToken.userId); 

        if(!req.user){
            throw req.user;
        }

        if (req.originalUrl === '/') { 
            return res.status(200).redirect('/user/dashboard');
        } 
        next();
    } catch (error) { 
        res.clearCookie("jwt");  
        res.status(401).redirect('/');
    }
};
