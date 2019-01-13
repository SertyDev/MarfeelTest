module.exports = function(config) {
    config.set({
        browsers: ['Chrome'],
        files: [
            { pattern: 'test/app-test.js', watched: false }
        ],
        frameworks: ['jasmine'],
        preprocessors: {
            'test/app-test.js': ['webpack']
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
        }
    });
};