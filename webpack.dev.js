const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge.smart(common({ ENVIRONMENT: 'development' }), {
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.(sc|sa|c)ss$/,
				use: [
					'style-loader',
					'css-loader',
					'postcss-loader',
					'sass-loader',
				]
			}
		]
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		hot: true,
		historyApiFallback: true,
	},
	devtool: 'sourcemap',
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	],
});
