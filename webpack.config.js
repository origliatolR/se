module.exports = {
	entry: "./React/components/es6/es6.react.jsx",
	output: {
		path: "public/bundles",
    	filename: "bundle.js"
	},
	module: {
		loaders: [
			{ test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loader: 'babel'}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.json']
	}
};