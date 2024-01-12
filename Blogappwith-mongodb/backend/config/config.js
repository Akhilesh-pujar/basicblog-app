// server/config/config.js
module.exports = {
    // Database configuration
    database: {
      url: process.env.MONGODB_URI || 'mongodb://0.0.0.0:27017/blog-app',
    
    },
  
    // JWT configuration
    jwt: {
      secret: process.env.JWT_SECRET || 'your-secret-key',
      expiresIn: '1h', // Token expiration time
    },
  
    // Server configuration
    server: {
      port: process.env.PORT || 5000,
    },
  };
  