const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => ({
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  target: 'web',

  module: {
    rules: [
      // Manifest json
      {
        test: /manifest\.json/,
        exclude: /(node_modules)/,
      },
      // TypeScript
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'ts-loader',
          // Эта опция помогает отлавливать ошибки в консоли?
          options: {
            transpileOnly: true,
          },
        },
      },
      // CSS
      {
        test: /\.css$/,
        // exclude: /node_modules/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
      // HTML
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          }
        ],
      },
      // Images
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(webp)$/i,
        use: [
          {
            loader: 'file-loader',
          },
          {
            loader: 'webp-loader',
          },
        ],
      },
      {
        test: /\.mp3$/,
        loader: 'file-loader',
      },
    ],
  },

  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
      "@blocks": path.resolve(__dirname, "src/components/blocks"),
      "@elements": path.resolve(__dirname, "src/components/elements"),
      "@layouts": path.resolve(__dirname, "src/components/layouts"),
      "@pages": path.resolve(__dirname, "src/components/pages"),
      "@ui": path.resolve(__dirname, "src/components/ui"),
      "@interfaces": path.resolve(__dirname, "src/interfaces"),
      "@services": path.resolve(__dirname, "src/services"),
      "@style": path.resolve(__dirname, "src/style"),
    },
    extensions: ['', '.ts', '.tsx', '.js'],
  },
  
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html',
      // manifest: 'public/manifest.json',
      chunks: ['main'],
    }),
  ],

  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 3000,
    static: [
      { directory: path.join(__dirname, 'dist') },
      { directory: path.join(__dirname, 'public') },
    ],
    compress: true,
    allowedHosts: 'all',
  },
  
  // Следующая настройка может чудовищно снижать производительность программы.
  devtool: argv.mode === 'development' ? 'inline-source-map' : false,
});
