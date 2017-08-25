const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: "./src/index.js",
  output: {
    path: __dirname + '/public',
    filename: "bundle.js",
    publicPath: '/public/'
  },
  module: {
    loaders: [
      {
        test: /\.js|.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.(css|scss)$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader')
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
		    test: /\.(ogg|m4a|mp3|wav|mpe?g)$/i,
		    use: 'file-loader'
			}
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'app.css', allChunks: true }),
    new CopyWebpackPlugin([
      {
        transform: function(content, path) {
          return content.toString().replace("AIzaSyDq0JMwwWJrPM56s6RvEgNILa6KzO4WjtE", "AIzaSyBYoZ5RrEsZVY_LqzWPkg-XZfxdsrlLhk0");
        },
        from: './index.html'
      }
    ])
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
