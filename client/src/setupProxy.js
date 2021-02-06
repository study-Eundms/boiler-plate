const { createProxyMiddleware } = require('http-proxy-middleware');
//frontend 3000번에서 요청을 줄 때, 5000번에서 받겠다
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
};