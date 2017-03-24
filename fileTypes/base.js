require('shelljs/global');
const fs = require('fs');

const caseConverter = require('../helpers/case_converter.js');
const logFunctions  = require('../helpers/logs.js');
const baseTemplate  = require('../templates/base.js');

const generateOne = (path, name) => {
  fs.exists(`${path}/${name}.jsx`, exists => {
    if(exists) {
      logFunctions.fileExistErrorLog(`${name}.jsx`);
    } else {
      mkdir('-p',`${path}/`);
      cd(path);
      var writeStream = fs.createWriteStream(`${name}.jsx`);

      switch(name) {
        case 'app':
          writeStream.write(baseTemplate.appJSX());
          break;
        case 'root':
          writeStream.write(baseTemplate.rootJSX());
          break;
        default:
          writeStream.write(baseTemplate.entryJSX());
      }
      writeStream.end();

      logFunctions.createFileLog(`${path}/${name}.jsx`);

      if (path.split('/').length === 2) {
        cd('../..');
      } else {
        cd('..');
      }
    }
  });
};

const generateBase = (name = 'sample_app') => {
  name = caseConverter.convert(name, caseConverter.toSnakeCase);

  generateOne('frontend/components', 'app');
  generateOne('frontend/components', 'root');
  generateOne('frontend', `${name}`);
};

module.exports = generateBase;
