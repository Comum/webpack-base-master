const baseWebpackConfig = require('../..');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = baseWebpackConfig.extend({
	context: __dirname,
	entry: {
		app: './app.js',
        vendors: ['jquery']
	},
	output: {
		path: path.join(__dirname, '../../dist/jquery'),
		publicPath: '',
		filename: '[name].js'
	},
	plugins: [
		...baseWebpackConfig.plugins,
        new HtmlWebpackPlugin({ template: 'index.html' }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
	]
});
