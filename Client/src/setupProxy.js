const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/products', // Your API endpoint path
    createProxyMiddleware({
      target: 'https://fakestoreapi.com',
      changeOrigin: true,
    })
  );
};