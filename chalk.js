const { inverse } = require("chalk");
const chalk = require("chalk");
const text = chalk.green(chalk.bold.bgYellow.red.inverse("Success"));
module.exports = text;

//inverse the style such as makes red to bg and yellow to text color
