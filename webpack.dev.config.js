var path = require("path");
var webpack = require("webpack");

require("es6-promise").polyfill();

module.exports = {
	entry: {
		app: "./main.js",
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		publicPath: "/dist",
		filename: "bundle.js",
		jsonpFunction: "WebpackJsonp",
	},
	resolve: {
		extensions: [".js"],
		alias: {
			vue$: "vue/dist/vue.common.js",
		},
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: "vue-loader",
				options: {
					loaders: {
						scss: "vue-style-loader!css-loader!sass-loader",
						sass: "vue-style-loader!css-loader!sass-loader?indentedSyntax",
					},
				},
			},
			{
				test: /\.js$/,
				exclude: path.resolve(__dirname, "node_modules"),
				loader: "babel-loader",
			},
		],
	},
	devServer: {
		historyApiFallback: true,
		noInfo: true,
	},
	performance: {
		hints: false,
	},
	devtool: "#eval-source-map",
};

if (process.env.NODE_ENV === "production") {
	module.exports.devtool = "#source-map";
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: '"production"',
			},
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
			compress: {
				warnings: false,
			},
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true,
		}),
	]);
}
