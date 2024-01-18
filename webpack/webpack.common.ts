import { Configuration } from "webpack";
import 'webpack-dev-server';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

const config: Configuration = {
  entry: path.resolve(__dirname, '..', 'src', 'index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['ts-loader']
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
        type: 'asset/inline'
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'public', 'index.html'),
      favicon: path.resolve(__dirname, '..', 'public', 'favicon.ico')
    }),
    new webpack.EnvironmentPlugin({ ...process.env })
  ]
};

export default config;
