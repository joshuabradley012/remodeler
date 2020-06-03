const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge.smart(common({ ENVIRONMENT: 'production' }), {
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.(sc|sa|c)ss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader',
				]
			}
		]
	},
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					mangle: true,
				},
			}),
			new OptimizeCssAssetsPlugin(),
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chinkFilename: '[id].css',
		}),
	],
}); 
