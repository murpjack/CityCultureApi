const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
// const CopyPlugin = require("copy-webpack-plugin");

const config = env => {
  return {

  entry: './src/index.ts',

  externals: [nodeExternals()],
  
  // devtool: 'false',

  mode: env || "development",
  
  target: 'node',
 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  // TODO: Create a config that is watched and one NOT watched for Dev/Prod.
  watch: env === "development",
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

  // plugins: [
  //   new CopyPlugin([{ 
  //         from: path.resolve(__dirname, "src", "seeds"),
  //         to: path.resolve(__dirname, "dist", "seeds")
  //       }])
  // ]
}};

module.exports = config;