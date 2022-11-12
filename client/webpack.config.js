const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const scssImporter = require("./webpack/scss-importer");
const tsTransformPaths = require("@zerollup/ts-transform-paths");

const path = require("path");

module.exports = (env = {}) => {
  return {
    mode: env.production ? "production" : "development",

    entry: {
      main: path.resolve(__dirname, "src", "index.tsx"),
    },
    devtool: "inline-source-map",
    output: {
      path: path.join(__dirname, "dist"),
      filename: env.production ? "[name].[contenthash].js" : "[name].bundle.js",
      chunkFilename: env.production
        ? "[id].[contenthash].js"
        : "[id].bundle.js",
      publicPath: "/",
    },
    target: "web",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          exclude: /node_modules/,
          options: {
            getCustomTransformers: (program) => {
              const transformer = tsTransformPaths(program);

              return {
                afterDeclarations: [transformer.afterDeclarations],
              };
            },
          },
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.s?css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: { importLoaders: 2 },
            },
            "postcss-loader",
            {
              loader: "sass-loader",
              options: {
                sassOptions: {
                  importer: scssImporter({
                    "@app": path.resolve(__dirname, "src"),
                  }),
                  includePaths: ["./node_modules"],
                },
                implementation: require("sass"),
              },
            },
          ].filter(Boolean),
        },
        {
          test: /\.jsx?$/i,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: {
            plugins: [
              ["@babel/plugin-proposal-class-properties", { loose: true }],
            ],
          },
        },
        {
          test: /\.(pdf|png|jpe?g|gif)$/i,
          type: "asset/inline",
          parser: {
            dataUrlCondition: {
              maxSize: 1 * 1024 * 1024, // 1mb
            },
          },
        },
        {
          test: /\.svg$/,
          type: "asset/source",
          issuer: /\.tsx?|.jsx?$/,
        },
        {
          test: /\.svg$/,
          type: "asset/inline",
          issuer: /\.scss?$/,
        },
        {
          test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "fonts/",
              },
            },
          ],
        },
      ],
    },
    resolve: {
      alias: {
        "@app": path.resolve(__dirname, "src"),
        "@assets": path.resolve(__dirname, "assets"),
        "@languages": path.resolve(__dirname, "compiled-lang"),
      },
      extensions: [
        ".js",
        ".jsx",
        ".ts",
        ".tsx",
        ".scss",
        ".css",
        ".svg",
        ".ico",
        ".json",
      ],
    },

    plugins: [
      new MiniCssExtractPlugin({
        filename: env.production
          ? "[name].[contenthash].css"
          : "[name].bundle.css",
        chunkFilename: env.production
          ? "[id].[contenthash].css"
          : "[id].bundle.css",
      }),
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./src/index.html",
        production: env.production,
      }),
    ],

    optimization: {
      splitChunks: {
        chunks: "all",
      },
      minimize: Boolean(env.production),
      minimizer: [`...`, new CssMinimizerPlugin()],
    },

    devServer: {
      historyApiFallback: true,
      port: 3330,
      hot: true,
      open: false,
      client: {
        overlay: false,
      },
    },
  };
};
