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
            }
        ]
    },
};

var indexConfig = Object.assign({}, config, {
    mode: 'development',
    entry: {
        index: "./src/js/app/index.js"
    },
    output: {
        path: path.resolve(__dirname, "public/js/app"),
        filename: "[name].js"
    },
});

var modelsConfig = Object.assign({}, config,{
    mode: 'development',
    entry: {
        impresions_model: "./src/js/models/impresions_model.js",
        revenue_model: "./src/js/models/revenue_model.js",
        visits_model: "./src/js/models/visits_model.js",
    },
    output: {
        path: path.resolve(__dirname, "public/js/models"),
        filename: "[name].js"
    },
});

module.exports = [
    indexConfig, modelsConfig
];
