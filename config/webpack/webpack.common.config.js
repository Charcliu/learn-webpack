const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const vendorPkg = ["react", "react-dom"];

module.exports = {
  entry: {
    app: "./src/index",
    vendor: vendorPkg,
  },
  output: {
    filename: "js/[name].[chunkhash:8].bundle.js",
    path: path.resolve(__dirname, "../../dist"),
  },
  module: {
    /**
     * test 规定了作用于以规则中匹配到的后缀结尾的文件，
     * use 即是使用 babel-loader 必须的属性，
     * exclude 告诉我们不需要去转译"node_modules"这里面的文件。
     */
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader" },
          { loader: "less-loader" },
        ],
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "images/",
            limit: 8192,
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash].css",
      chunkFilename: "css/[id].[hash].css",
    }),
  ],
};
