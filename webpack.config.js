const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
    entry: path.resolve(__dirname, './client/index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
      },
      devServer: {
        publicPath: '/build',
        proxy: {
            '/todos': 'http://localhost:3000'
          }
      },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
}