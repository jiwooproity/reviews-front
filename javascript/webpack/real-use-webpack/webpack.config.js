const path = require("path");

module.exports = {
    mode: "development",
    entry: {
        main: "./src/app.js",
    },
    output: {
        path: path.resolve(__dirname + "build"),
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                type: "asset/resource",
            }
        ]
    }
}