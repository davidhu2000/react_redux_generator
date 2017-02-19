const colors = require('colors');

const fileExistErrorLog = filename => {
  console.log("  error: ".red.bold, `${filename} exists. Cannot overwrite.`);
};

const noMethodErrorLog = () => {
  console.log("  error: ".red.bold, "I am not sure what you want to create...");
};

const noNameErrorLog = (method) => {
  console.log("  error: ".red.bold, `Please enter a name for the ${method}`);
};

const createFileLog = (fullPath) => {
  console.log("created: ".green.bold, `${fullPath}`);
};

module.exports = {
  fileExistErrorLog,
  noMethodErrorLog,
  noNameErrorLog,
  createFileLog
};
