require('shelljs/global');
const fs = require('fs');

const caseConverter = require('../helpers/case_converter.js');
const logFunctions = require('../helpers/logs.js');

const actionNameCreator = name => (
  name.split(/(?=[A-Z])/).map( word => word.toUpperCase() ).join('_')
);

const writeConstant = constName => (
`export const ${constName} = '${constName}';`
);

const writeAction = (actionName, constName) => (
`export const ${actionName} = () => ({
  type: ${constName}
});
`
);

const generateAction = (name, actions) => {
  let fullPath = `frontend/actions/${name}_actions.js`

  fs.exists(fullPath, (exists) => {
    if(exists) {
      logFunctions.fileExistErrorLog();
    } else {
      mkdir('-p', 'frontend/actions/');
      cd('frontend/actions');

      let writeStream = fs.createWriteStream(`${name}_actions.js`);

      let constNames = actions.map( action => (
        caseConverter.convert(action, caseConverter.toScreamingSnakeCase)
      ));

      let actionNames = actions.map( action => (
        caseConverter.convert(action, caseConverter.toLowerCamelCase)
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
    }
  });
};

module.exports = generateAction;
