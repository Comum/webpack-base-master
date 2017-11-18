const baseWebpackConfig = require('../..');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = baseWebpackConfig.extend({
	context: __dirname,
	entry: {
		app: './app.js'
	},
	output: {
		path: path.join(__dirname, '../../dist/react'),
		publicPath: '',
		filename: '[name].js'
	},
	plugins: [
		...baseWebpackConfig.plugins,
        new HtmlWebpackPlugin({ template: 'index.html' }),
	]
});
