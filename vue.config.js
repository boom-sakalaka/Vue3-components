/*
 * @Author: GZH
 * @Date: 2021-10-05 15:06:46
 * @LastEditors: GZH
 * @LastEditTime: 2021-10-05 16:28:57
 * @FilePath: \vue3-json-schema-form\vue.config.js
 * @Description:
 */
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
const CircularDependencyPlugin = require('circular-dependency-plugin')

module.exports = {
  configureWebpack(config) {
    console.log(config.plugins)
  },
  chainWebpack(config) {
    config.plugin('monaco').use(new MonacoWebpackPlugin())
    config.plugin('circular').use(new CircularDependencyPlugin())
  },
}
