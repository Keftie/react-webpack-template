import { Configuration } from 'webpack';
import 'webpack-dev-server';

const config : Configuration = {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    open: true
  },
  devtool: 'cheap-module-source-map'
};

export default config;
