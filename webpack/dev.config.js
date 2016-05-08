var fs = require('fs');
var webpack = require('webpack');
var babelrc = fs.readFileSync('./.babelrc');
var babelLoaderQuery = JSON.parse(babelrc);

var host = 'localhost';
var port = 8080;

module.exports = {
  context: __dirname + '/../src',
  entry: {
    main: [
      'webpack-hot-middleware/client?path=http://' + host + ':' + port + '/__webpack_hmr',
      './client.js'
    ]
  },
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules'
    ],
    extensions: ['', '.json', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader?' + JSON.stringify(babelLoaderQuery)]
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.png|\.jpg|\.svg$/,
        loader: 'url'
      },
      {
        test: /\.scss$/,
        loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!postcss-loader'
      }
    ]
  },
  postcss: function () {
    return {
      defaults: [require('precss'), require('lost'), require('postcss-color-function')],
      cleaner: []
    };
  },
  output: {
    filename: 'main.js',
    path: __dirname + '/dist',
    publicPath: 'http://localhost:8080/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false,
      __DEVELOPMENT__: true,
      __DEVTOOLS__: true
    })
  ]
};