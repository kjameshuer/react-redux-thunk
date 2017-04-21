const path = require('path');
const webpack = require('webpack');
module.exports = {
  entry: [
    './src/index.js'
  ],
   plugins: [
    new webpack.DefinePlugin({
      BASENAME: JSON.stringify("/")
    })
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    preLoaders:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },
    
    // {
    //   test:/\.js$/,
    //   exclude: /node_modules/,
    //   loader: 'eslint-loader'
    // },
    {
      test: /\.css$/, 
      loader: 'style-loader!css-loader'
    },
     {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
   },
     {  test: /\.(png|jpg|gif|woff|woff2)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
