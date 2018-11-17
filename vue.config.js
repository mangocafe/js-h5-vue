module.exports = {
  devServer: {
    open: true,
    port: 9000,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
