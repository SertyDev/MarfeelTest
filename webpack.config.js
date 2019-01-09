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
        model: "./src/js/models/AdModel.js"
    },
    output: {
        path: path.resolve(__dirname, "public/js/models"),
        filename: "[name].js"
    },
});

// Return Array of Configurations
module.exports = [
    indexConfig, modelsConfig,
];

// module.exports = {
//     mode: 'development',
//     entry: {
//         index: "./src/js/index.js",
//         model: "./src/models/AdModel.js"
//     },
//     output: {
//         path: path.resolve(__dirname, "public/js"),
//         filename: "[name].js"
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 exclude: /(node_modules)/,
//                 use: {
//                     loader: "babel-loader",
//                     options: {
//                     presets: ["babel-preset-env"]
//                     }
//                 }
//             }
//         ]
//     }
// };