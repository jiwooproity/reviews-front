const path = require("path");

module.exports = {
    mode: "development",
    entry: {
        main: "./src/app.js",
    },
    output: {
        path: path.resolve(__dirname + "/build"),
        filename: "[name].js",
    },
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     use: [
            //         "./my-custom-webpack-plugin.js"
            //     ]
            // },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.jpeg/,
                type: 'asset/resource',
                generator: {
                  filename: 'images/[name][ext]',
                },
              },
        ]
    },
}