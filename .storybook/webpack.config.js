module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
        options: require('./babel.config')
      }
    ]
  });

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
