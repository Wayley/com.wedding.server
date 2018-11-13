module.exports = {
  port: 3000,
  // express-session 的配置信息
  session: {
    secret: 'wedding',
    key: 'wedding',
    maxAge: 2592000000
  }
};
