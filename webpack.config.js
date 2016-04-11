module.exports = {
  context: __dirname + '/app',
  entry: './index.js',
  output: {
    path: __dirname + '/app',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }, {
        test: /\.html$/,
        loader: 'raw',
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        loader: 'style!css'
      }, {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }, {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file"
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
      }
    ]
  },
  devServer: {
    contentBase: "./app",
    host: '0.0.0.0',
    port: 8080,
    proxy: {
      '/api*': {
        target: 'http://kontas-dev.app'
      }
    }
  }
}