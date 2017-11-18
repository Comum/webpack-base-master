const baseWebpackConfig = require('../..');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const fs = require('fs');

fs.readdirSync(__dirname, '..');

const EXAMPLE_NAME = 'handlebars';

module.exports = baseWebpackConfig.extend({
	context: __dirname,
	entry: {
		app: './app.js'
	},
	output: {
		path: path.join(__dirname, `../../dist/${EXAMPLE_NAME}`),
		publicPath: '',
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.hbs$/,
				loader: 'handlebars-loader',
				query: {
					partialDirs: [ path.resolve(__dirname, 'src/partials') ]
				}
			}
		]
	},
	plugins: [
		...baseWebpackConfig.plugins,
        new HtmlWebpackPlugin({ template: 'index.hbs' }),
	]
});
