var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: path.join(__dirname, 'app/index.js'),
	output: {
		path: path.join(__dirname, 'dist/js'),
		publicPath: '/dist/js/',
		filename: 'app.js'
	},
	module: {
		loaders: [{
				test: /.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['env','react']
				}
			}
		]
	}
};
