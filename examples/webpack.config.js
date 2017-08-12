const path = require( 'path' );

module.exports = {
  entry: {
    main: './examples/src/index.js',
  },
  output: {
    path: path.resolve( __dirname, 'dist' ),
    publicPath: '/',
    filename: '[name].js',
  },
  devServer: {
    publicPath: '/',
    contentBase: './examples/dist',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node-modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.json$/,
        use: 'json-loader',
      },
    ],
  },
};
