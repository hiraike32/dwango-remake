const path = require("path");
const env = process.NODE_ENV;

module.exports = {
  mode: env || "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: ".",
    publicPath: "/dist/",
    port: 8888,
    inline: true
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.ts[x]?$/,
        exclude: path.resolve(__dirname, "node_modules"),
        loader: "ts-loader"
      },
      {
        test: /\.s?css$/,
        include: [path.join(__dirname, "src")],
        use: [
          {
            loader: "style-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "css-loader",
            options: {
              root: ".",
              modules: true,
              importLoaders: 1,
              localIdentName: "[path]_[local]_[hash:base64:5]"
            }
          },
          {
            loader: "sass-loader",
            options: { sourceMap: true }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]"
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css"]
  }
};
