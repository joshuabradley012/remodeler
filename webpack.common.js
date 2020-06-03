const webpack = require('webpack');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env) => {
  const currentPath = path.join(__dirname);
  const basePath = currentPath + '/.env';
  const envPath = basePath + '.' + env.ENVIRONMENT;
  const finalPath = fs.existsSync(envPath) ? envPath : basePath;
  const fileEnv = dotenv.config({ path: finalPath }).parsed;
  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});

  return {
    entry: {
      app: './src/index.js',
    },
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /(node_modules|bower_components)/,
					loader: 'babel-loader',
					options: { presets: ['@babel/env'] }
				},
			],
		},
    resolve: { extensions: ['*', '.js', '.jsx'] },
		devtool: 'sourcemap',
		output: {
			chunkFilename: '[name].bundle.js',
			filename: '[name].bundle.js',
			path: path.resolve(__dirname, 'dist'),
			publicPath: '/',
		},
		plugins: [
			new webpack.DefinePlugin(envKeys),
			new CleanWebpackPlugin(),
			new HtmlWebpackPlugin({
				template: "./src/index.html",
				title: 'Remodeler',
			}),
		],
	}
};
