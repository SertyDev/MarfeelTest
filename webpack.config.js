const path = require("path");

var config = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                    presets: ["babel-preset-env"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    
};

var appConfig = Object.assign({}, config, {
    mode: 'development',
    entry: {
        app: "./src/app.js"
    },
    output: {
        path: path.resolve(__dirname, "public/app/"),
        filename: "[name].js"
    },
});

module.exports = [
    appConfig
];
