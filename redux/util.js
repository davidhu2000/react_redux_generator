require('shelljs/global');
const fs = require('fs');

const caseConverter = require('../helpers/case_converter.js');
const logFunctions  = require('../helpers/logs.js');

const writeUtil = (utilName) => (
`export const ${utilName} = () => (
  // your code here;
);
`
);

const generateUtil = (name, utils = []) => {
  name = caseConverter.convert(name, caseConverter.toSnakeCase);

  let fileName = `${name}_util.js`;

  fs.exists(`frontend/util/${fileName}`, (exists) => {
    if(exists) {
      logFunctions.fileExistErrorLog();
    } else {

      mkdir('-p', 'frontend/util/');
      cd('frontend/util');

      let writeStream = fs.createWriteStream(fileName);

      let data = utils.map( util => {
        util = caseConverter.convert(util,caseConverter.toLowerCamelCase);
        return writeUtil(util);
      }).join('\n');

      writeStream.write(data);
      writeStream.close();
      cd('..');
      logFunctions.createFileLog(`frontend/util/${fileName}`);
    }
  });
};

module.exports = generateUtil;
