require('shelljs/global');
const fs = require('fs');

const caseConverter = require('../helpers/case_converter.js');
const logFunctions = require('../helpers/logs.js');

const reducerTemplate = require('../templates/reducer.js');

const createRootReducerImports = reducerNameArray => {
  return reducerNameArray.map( reducer => {
    let name = reducer.split('.')[0];
    let nameLCC = caseConverter.convert(name, caseConverter.toLowerCamelCase);
    let nameSC = caseConverter.convert(reducer, caseConverter.toSnakeCase);

    return `import ${nameLCC} from './${reducer}'`;

  }).join('\n');
};

const createRootReducerKeyPairs = reducerNameArray => {
  return reducerNameArray.map( reducer => {
    let name = reducer.split('.')[0];
    let key = name.split('_')[0];
    let nameLCC = caseConverter.convert(name, caseConverter.toLowerCamelCase);

    return `  ${key}: ${nameLCC}`;

  }).join(',\n');
};

const createReducer = (path, name, ...actions) => {
  let nameLCC = caseConverter.convert(name, caseConverter.toLowerCamelCase);
  let nameSC = caseConverter.convert(name, caseConverter.toSnakeCase);
  let reducerFiles;

  if (fs.existsSync('frontend/reducers')) {
    reducerFiles = fs.readdirSync('frontend/reducers');
  } else {
    reducerFiles = [];
  }

  fs.exists(`frontend/reducers/${nameSC}_reducer.js`, (exists) => {
    if(exists) {
      logFunctions.fileExistErrorLog();
    } else {
      let filename = `${nameSC}_reducer.js`;
      mkdir('-p',`frontend/reducers/`);
      cd('frontend/reducers');

      var writeStream = fs.createWriteStream(filename);
      if (name === 'root') {
        let importStatements = createRootReducerImports(reducerFiles);
        let keyPairStatements = createRootReducerKeyPairs(reducerFiles);

        writeStream.write(reducerTemplate.root(importStatements, keyPairStatements));
      } else {
        writeStream.write(reducerTemplate.reducer(nameLCC));
      }

      writeStream.end();

      logFunctions.createFileLog(`frontend/reducers/${nameSC}_reducer.js`);
    }
  });


};

module.exports = createReducer;
