import * as HtmlWebpackPlugin from "html-webpack-plugin"
import * as Path from "path"
import * as Webpack from "webpack"

const staticDir = Path.resolve(__dirname, "static")

const configuration: Webpack.Configuration = {
	context: Path.resolve(__dirname, "src"),
	devServer: {
		contentBase: staticDir
	},
	devtool: "source-map",
	entry: "./index.tsx",
	output: {
		filename: "index.js",
		libraryTarget: "umd",
		path: Path.resolve(__dirname, "dist")
	},
	module: {
		rules: [
			{
				exclude: /node_modules/,
				loader: "ts-loader",
				test: /\.tsx?$/
			},
			{
				enforce: "pre",
				loader: "source-map-loader",
				test: /\.js$/
			}
		]
	},
	optimization: {
		minimize: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: "head",
			template: Path.join(staticDir, "index.ejs"),
			xhtml: true
		})
	],
	resolve: {
		extensions: [".js", ".ts", ".tsx"]
	}
}

export default configuration
