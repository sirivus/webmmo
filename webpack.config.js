const path = require("path");
const toml = require("toml");
const yaml = require("yamljs");
const json5 = require("json5");
const HtmlWebpackPlugin = require('html-webpack-plugin'); // installed via npm
const { isContext } = require("vm");
const { title } = require("process");

module.exports = {
  mode: "development", //development
  entry: {
    index: "./src/index.js",
    print: "./src/print.js",
    another: "./src/another-module.js",
  },
  devtool: "inline-source-map", //development
  devServer: {
    static: "./dist",
  }, //This tells webpack-dev-server to serve the files from the dist directory on localhost:8080.
  plugins: [
    new HtmlWebpackPlugin({
      title: "Project SIRI",
      favicon: "./src/favicon.ico",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ["csv-loader"],
      },

      {
        test: /\.xml$/i,
        use: ["xml-loader"],
      },
      {
        test: /\.toml$/i,
        type: "json",
        parser: {
          parse: toml.parse,
        },
      },

      {
        test: /\.yaml$/i,
        type: "json",
        parser: {
          parse: yaml.parse,
        },
      },

      {
        test: /\.json5$/i,
        type: "json",
        parser: {
          parse: json5.parse,
        },
      },
    ],
  },
};
