const colors = require('colors');

const fileExistErrorLog = fileName => {
  console.log("  error: ".red.bold, `${fileName} exists. Cannot overwrite.`);
};

const noMethodErrorLog = () => {
  console.log("  error: ".red.bold, "I am not sure what you want to create...");
};

const noNameErrorLog = method => {
  console.log("  error: ".red.bold, `Please enter a name for the ${method}`);
};

const createFileLog = fullPath => {
  console.log("created: ".green.bold, `${fullPath}`);
};

const removedFileLog = fullPath => {
  console.log("deleted: ".green.bold, `${fullPath}`);
};

const noExistFileErrorLog = fileName => {
  console.log("  error: ".red.bold, `${fileName} do not exist. Cannot remove.`);
}

module.exports = {
  fileExistErrorLog,
  noMethodErrorLog,
  noNameErrorLog,
  createFileLog,
  removedFileLog,
  noExistFileErrorLog
};
