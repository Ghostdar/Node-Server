export default {
    admin: {
      name: 'test',
      passwd: 'test'
    },
    mongoDB: 'mongodb://localhost:27017/app',
    port: process.env.PORT || 4000,
    authSecret: 'blogAuth',
    expiresIn: 60 * 60, // token 1h
  }