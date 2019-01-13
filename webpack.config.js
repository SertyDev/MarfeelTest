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

// var cssConfig = Object.assign({}, config, {
//     mode: 'development',
//     entry: {
//         index: "./src/css/index.css"
//     },
//     output: {
//         path: path.resolve(__dirname, "public/app"),
//         filename: "[name].css"
//     },
// });

// var modelsConfig = Object.assign({}, config,{
//     mode: 'development',
//     entry: {
//         impresions_model: "./src/js/models/impresions_model.js",
//         revenue_model: "./src/js/models/revenue_model.js",
//         visits_model: "./src/js/models/visits_model.js",
//     },
//     output: {
//         path: path.resolve(__dirname, "public/js/models"),
//         filename: "[name].js"
//     },
// });

module.exports = [
    appConfig//, modelsConfig
];
