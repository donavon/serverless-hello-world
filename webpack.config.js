var nodeExternals = require('webpack-node-externals')

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  entry: './handler',
  output: {
    path: __dirname+ '/.webpack',
    filename: 'handler.js',
    library: 'handler',
    libraryTarget: 'commonjs2',
  },

   module: {
      loaders: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
         }
      ]
   }
};
