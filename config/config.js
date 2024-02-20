require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  clientURL: process.env.CLIENT_URL,
  mongodbURI: process.env.MONGODB_URI + 'url-short-DB?retryWrites=true&w=majority' || 'mongodb://localhost:27017/url-short-DB',
  jwtSecret: process.env.JWT_SECRET || 'your-secret-key',
  isProduction: process.env.NODE_ENV === 'production',
};