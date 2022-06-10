const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: '../public',
  devServer: {
    proxy: 'http://localhost:3000',
  }
})
