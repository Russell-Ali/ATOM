const path = require("path");

module.exports = {
  entry: "./app/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "mainScript.js",
  },
  devServer: {
    port: 8080,
    contentBase: path.resolve(__dirname, "dist"),
    hot: true,
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devtool: "inline-source-map",
};
