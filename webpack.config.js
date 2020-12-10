const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const CopyPlugin = require("copy-webpack-plugin");


const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {

  entry: './src/index.ts',

  externals: [nodeExternals()],
  
  // devtool: 'false',

  mode: NODE_ENV,
  
  target: 'node',
 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },

  watch: true,
  
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          'ts-loader',
        ]
      }
    ]
  },

  plugins: [
    new CopyPlugin([{ 
          from: path.resolve(__dirname, "src", "seeds"),
          to: path.resolve(__dirname, "dist", "seeds")
        }])
  ]
};
