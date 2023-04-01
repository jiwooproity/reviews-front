const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // 모드 설정
    mode: "development",
    resolve: {
        // 절대 경로 설정
        alias: {
			"@": path.resolve(__dirname, "./src"),
		},
        //  확장자 관리
        extensions: ["*", ".js", ".jsx"],
    },
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
    },
    // npm install -D webpack-dev-server
    devServer: {
        static: './build',
        port: 3000,
    },
    // 모듈 babel, html, css 관리 중
    // npm install --save-dev style-loader, css-loader / babel-loader 설치 필요
    module: {
        rules: [
            {
                test: /\.js|\.jsx$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(index.html)$/,
                use: [
                  { loader: "file-loader" },
                  { loader: "extract-loader" },
                  {
                  loader: 'html-loader',
                  options: {
                    attrs: [':data-src']
                  }
                }]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    // Html Webpack Plugin : webpack의 번들 파일을 html 파일과 연결해 주는 작업을 한다.
    // 굳이 style-loader와 css-loader는 있는데 html-loader가 없는 이유는 html의 경우엔 하나의 파일로만 존재하기 때문에 필요하지 않기 때문이다.
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html"
        }),
    ],
}