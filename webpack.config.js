/* eslint-disable */
const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        publicPath: "/",
        overlay: true,
        port: 3000,
        stats: "errors-only",
        historyApiFallback: true,
    },
    entry: "./src/index.js",
    module: {
    rules: [
        {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        },
        {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        },
    ],
    },
    output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    },
    plugins: [
    new HtmlPlugin({
        template: "./public/index.html",
        templateParameters: {
        env: process.env.NODE_ENV === "production" ? "배포용" : "개발용",
        },
        minify:
        process.env.NODE_ENV === "production"
            ? {
                collapseWhitespace: true, //빈칸제거
                removeComments: true, //주석제거
            }
            : false,
    }),
    new CleanWebpackPlugin(),
    ],
};
