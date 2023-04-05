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

            // webpack5 asset/resource
            {
                test: /\.jpe?g$/,
                type: 'asset/resource',
                // type: 'asset/inline',
                generator: {
                  filename: 'images/[name].[ext]?[hash]',
                },
            },

            // need downgrade webpack 5
            // {
            //     test: /\.jpe?g$/,
            //     loader: 'url-loader',
            //     options: {
            //         publicPath: '../build/',
            //         name: '[name].[ext]?[hash]',
            //         limit: 20000, // 20kb
            //     }
            // }
        ]
    },
}