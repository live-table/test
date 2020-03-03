import * as Path from "path"
import * as Sh from "shelljs"

const webpackConfigFile = Path.resolve(__dirname, "../webpack.config.ts")

Sh.exec(`webpack-dev-server --config ${webpackConfigFile}`)
