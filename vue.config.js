module.exports = {
  devServer: {
    open: true,
    port: 8866,
    proxy: {
      '/api': {
        target: 'http://localhost:8888',
        ws: true,
        changeOrigin: true,
      },
    },
  },

  // 第三方插件配置
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true,
    },
  },
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        import: [
          './src/theme',
        ],
      },
    },
  },
};
