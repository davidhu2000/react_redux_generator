require('shelljs/global');
const fs = require('fs');

const caseConverter   = require('../helpers/case_converter.js');
const logFunctions    = require('../helpers/logs.js');
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

const updateRootReducer = (nameLCC, nameSC) => {

  fs.exists(`root_reducer.js`, exists => {
    if(exists) {
      let root = fs.readFileSync('root_reducer.js', 'utf8');
      let keyValStr = 'const rootReducer = combineReducers({\n';
      let kvIdx = root.indexOf(keyValStr) + keyValStr.length;

      root = root.slice(0, kvIdx) + `  ${nameLCC}: ${nameLCC}Reducer,\n` + root.slice(kvIdx);

      let importStr = 'import { combineReducers } from \'redux\';\n'
      let iIdx = root.indexOf(importStr) + importStr.length;
      root = root.slice(0, iIdx) + `import ${nameLCC}Reducer from './${nameSC}_reducer.js'\n` + root.slice(iIdx);

      fs.writeFileSync('root_reducer.js', root);
    }
  });
}

const createReducer = (name, ...actions) => {
  let nameLCC = caseConverter.convert(name, caseConverter.toLowerCamelCase);
  let nameSC = caseConverter.convert(name, caseConverter.toSnakeCase);
  let reducerFiles;
  let fileName = `${nameSC}_reducer.js`;

  if (fs.existsSync('frontend/reducers')) {
    reducerFiles = fs.readdirSync('frontend/reducers');
  } else {
    reducerFiles = [];
  }

  fs.exists(`frontend/reducers/${fileName}`, exists => {
    if(exists) {
      logFunctions.fileExistErrorLog(fileName);
    } else {
      mkdir('-p',`frontend/reducers/`);
      cd('frontend/reducers');

      var writeStream = fs.createWriteStream(fileName);
      if (name === 'root') {
        let importStatements = createRootReducerImports(reducerFiles);
        let keyPairStatements = createRootReducerKeyPairs(reducerFiles);
        writeStream.write(reducerTemplate.root(importStatements, keyPairStatements));
        writeStream.end();
      } else {
        writeStream.write(reducerTemplate.reducer(nameLCC));
        writeStream.end();
        updateRootReducer(nameLCC, nameSC);
      }

      logFunctions.createFileLog(`frontend/reducers/${fileName}`);
    }
  });


};

module.exports = createReducer;
