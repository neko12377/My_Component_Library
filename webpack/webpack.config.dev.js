const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const chalk = require("chalk");

const config = {
    mode: "development",
    entry: {
        index: "./src/index.tsx",
    },
    output: {
        path: path.resolve("dist"),
    },
    resolve: {
        extensions: [".tsx", ".js", ".ts"],
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "@babel/preset-env",
                                "@babel/preset-typescript",
                            ],
                            plugins: ["babel-plugin-styled-components"],
                        },
                    },
                    {
                        loader: "ts-loader",
                    },
                ],
                exclude: /[\\/]node_modules[\\/]/,
            },
            {
                test:   /\.s[ac]ss$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "sass-loader",
                    },
                ]
            }
        ],
    },
    devtool: "inline-source-map",
    devServer: {
        open: true,
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./static/index.html",
        }),
        new CleanWebpackPlugin(),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_module[\\/]/,
                    priority: 10,
                    chunks: "all",
                    minSize: 0,
                    minChunks: 2,
                },
            },
        },
    },
}

module.exports = config;
console.log(chalk.hex("#61dbb3").bold("Starting"));