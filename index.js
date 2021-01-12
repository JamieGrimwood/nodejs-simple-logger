const chalk = require("chalk");

exports.Info = (data) => {
  console.log("[INFO] " + data);
};

exports.Warn = (data) => {
  console.log(chalk.yellow("[WARN] ") + data);
};

exports.Error = (data) => {
  console.log(chalk.red("[ERROR] ") + data);
};

exports.Success = (data) => {
  console.log(chalk.green("[SUCCESS] ") + data);
};
