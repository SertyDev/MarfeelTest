
module.exports = function(config) {
  config.set({
      browsers: ['Chrome'],
      files: [
          { pattern: 'spec/app_spec.js', watched: false }
      ],
      frameworks: ['jasmine'],
      preprocessors: {
          'spec/app_spec.js': ['webpack']
      },
      webpack: {
          module: {
              loaders: [
                  { test: /\.js/, exclude: /node_modules/, loader: 'babel-loader' }
              ]
          },
          watch: true
      },
      webpackServer: {
          noInfo: true
      },
      port: 9876
  });
};
