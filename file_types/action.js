/* global cd mkdir */
require('shelljs/global');
const fs = require('fs');

const caseConverter = require('../helpers/case_converter.js');
const logFunctions  = require('../helpers/logs.js');

const writeConstant = constName => (
`export const ${constName} = '${constName}';`
);

const writeAction = (actionName, constName) => {
  let arg = '()';
  let data = '';

  if(/receive/.test(actionName)) {
    arg = actionName.replace('receive', '');
    arg = caseConverter.convert(arg, caseConverter.toCamelCase);
    data = `,\n  ${arg}`;
  }

  return (
`export const ${actionName} = ${arg} => ({
  type: ${constName}${data}
});
`
  );
};

const generateAction = (name, actions) => {
  let nameSC = caseConverter.convert(name, caseConverter.toSnakeCase);

  let fileName = `${nameSC}_actions.js`;
  let fullPath = `frontend/actions/${fileName}`;

  fs.exists(fullPath, exists => {
    if(exists) {
      logFunctions.fileExistErrorLog(fileName);
    } else {
      mkdir('-p', 'frontend/actions/');
      cd('frontend/actions');

      let writeStream = fs.createWriteStream(fileName);

      let constNames = actions.map( action => (
        caseConverter.convert(action, caseConverter.toScreamingSnakeCase)
      ));

      let actionNames = actions.map( action => (
        caseConverter.convert(action, caseConverter.toCamelCase)
      ));

      let data = constNames.map( constName => (
        writeConstant(constName))
      ).join('\n');

      data += '\n\n';
      data += actionNames.map( (action, idx) => (
        writeAction(action, constNames[idx])
      )).join('\n');

      writeStream.write(data);

      writeStream.close();

      logFunctions.createFileLog(fullPath);
      cd('../..');
    }
  });
};

module.exports = generateAction;
