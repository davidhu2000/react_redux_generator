/* global cd mkdir */
require('shelljs/global');
const fs = require('fs');

const caseConverter     = require('../helpers/case_converter.js');
const logFunctions      = require('../helpers/logs.js');
const componentTemplate = require('../templates/component.js');

const generateComponent = (name, flags) => {
  let nameSC = caseConverter.convert(name, caseConverter.toSnakeCase);
  let nameUCC = caseConverter.convert(name, caseConverter.toPascalCase);
  flags = flags.join('');

  fs.exists(`frontend/components/${nameSC}/${nameSC}.jsx`, exists => {
    if(exists) {
      logFunctions.fileExistErrorLog(`${nameSC}.jsx`);
    } else {

      mkdir('-p', `frontend/components/${nameSC}`);
      cd(`frontend/components/${nameSC}`);

      // write functional component
      if(flags.includes('-f') || flags.includes('--functional')) {
        let writeStreamFunctional = fs.createWriteStream(`${nameSC}.jsx`);
        let functionalData = componentTemplate.functional(nameUCC);
        writeStreamFunctional.write(functionalData);
        writeStreamFunctional.close();
        logFunctions.createFileLog(`frontend/components/${nameSC}/${nameSC}.jsx`);

      // write full class component
      } else {

        let writeStreamPresentation = fs.createWriteStream(`${nameSC}.jsx`);
        let presentationData = componentTemplate.presentational(nameUCC);
        writeStreamPresentation.write(presentationData);
        writeStreamPresentation.close();

        logFunctions.createFileLog(`frontend/components/${nameSC}/${nameSC}.jsx`);
      }
      // write container file
      if(!flags.includes('-nc') && !flags.includes('--no-container')) {
        let writeStreamContainer = fs.createWriteStream(`index.jsx`);
        let containerData = componentTemplate.container(nameUCC, nameSC);
        writeStreamContainer.write(containerData);
        writeStreamContainer.close();

        logFunctions.createFileLog(`frontend/components/${nameSC}/index.jsx`);
      }

      cd('../../..');
    }
  });
};

module.exports = generateComponent;
