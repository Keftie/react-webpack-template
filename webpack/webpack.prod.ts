import { Configuration } from 'webpack';
import 'webpack-dev-server';

const config: Configuration = {
  mode: 'production',
  devtool: 'source-map'
};

export default config;
