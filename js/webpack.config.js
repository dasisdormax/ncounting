const path = require("path");

module.exports = {
	entry: "./src/app.js",
	devtool: "source-map",
	output: {
		filename: "ncounting.js",
		path: path.resolve(__dirname, "dist")
	},
	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
		]
	}
};
