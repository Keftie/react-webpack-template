import { Configuration } from 'webpack';
import 'webpack-dev-server';
import { merge } from 'webpack-merge';
import commonConfig from './webpack.common';

const configuration = (_env: { [key: string]: string }): Configuration => {
  const { env } = _env;
  const envConfig = require(`./webpack.${env}`).default;
  const config = merge(commonConfig, envConfig);
  return config;
};

export default configuration;
