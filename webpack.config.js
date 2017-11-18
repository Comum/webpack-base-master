const path = require('path');
const _ = require('lodash');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/js/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer]
                        }
                    }, 'resolve-url-loader', 'sass-loader']
                })
            },
            {
                test: /\.(ttf|eot|woff2?)(\?v=[a-z0-9=\.]+)?$/i,
                loader: 'file-loader?name=./fonts/[name].[ext]'
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/i,
                loaders: 'file-loader?name=./img/[sha512:hash:base64:7].[ext]'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].bundle.css'),
        new HtmlWebpackPlugin({ template: 'src/index.ejs' })
    ]
};

Object.defineProperty(module.exports, 'extend', {
    value(config) {
        return _.merge({}, module.exports, config);
    }
});
