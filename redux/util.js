require('shelljs/global');
const fs = require('fs');

const caseConverter = require('../helpers/case_converter.js');
const logFunctions = require('../helpers/logs.js');

const writeAction = (actionName) => (
`export const ${actionName} = () => (
  // your code here;
);
`
);

const generateUtil = (name, actions = []) => {
  name = caseConverter.convert(name, caseConverter.toSnakeCase);

  fs.exists(`frontend/util/${name}_util.js`, (exists) => {
    if(exists) {
      logFunctions.fileExistErrorLog();
    } else {

      mkdir('-p', 'frontend/util/');
      cd('frontend/util');

      let writeStream = fs.createWriteStream(`${name}_util.js`);

      let data = actions.map( action => {
        action = caseConverter.convert(action,caseConverter.toLowerCamelCase);
        return writeAction(action);
      }).join('\n');

      writeStream.write(data);
      writeStream.close();
      cd('..');
      logFunctions.createFileLog(`frontend/util/${name}_util.js`);
    }
  });
};

module.exports = generateUtil;
