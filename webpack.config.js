const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require("webpack");

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
		    {
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
			        fallback: 'style-loader',
			        use: ['css-loader', 'sass-loader']
				})
		    },
		    {
		    	test: /\.js$/,
		    	loader: 'babel-loader',
		    	exclude: /node_modules/,
		    	query: {
		    		presets: ['es2015']
		    	}
		    }
		]
	},
	plugins: [
		new ExtractTextPlugin('style.css'),
		new webpack.optimize.UglifyJsPlugin({
			output: {
				comments: false
			},
			compressor: {
				warnings: false,
				unused: true,
				dead_code: true
			}
		})
	]
};
