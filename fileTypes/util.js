require('shelljs/global');
const fs = require('fs');

const caseConverter = require('../helpers/case_converter.js');
const logFunctions  = require('../helpers/logs.js');

const writeUtil = (utilName, constName) => {
  let arg = '()';
  let data = '// your code here';

  if(/fetch/.test(utilName)) {
    arg = utilName.replace('fetch', '')
    arg = caseConverter.convert(arg, caseConverter.toLowerCamelCase)
    data = `$.ajax({\n    method: '',\n    url: '',\n    data: ''\n  })`;
  }

  return (
`export const ${utilName} = ${arg} => ({
  ${data}
});
`
  );
};

const generateUtil = (name, utils = []) => {
  name = caseConverter.convert(name, caseConverter.toSnakeCase);

  let fileName = `${name}_util.js`;

  fs.exists(`frontend/util/${fileName}`, (exists) => {
    if(exists) {
      logFunctions.fileExistErrorLog(`${name}_util.js`);
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
