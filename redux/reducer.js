require('shelljs/global');
const fs = require('fs');

const caseConverter = require('../helpers/case_converter.js');
const logFunctions = require('../helpers/logs.js');

const reducerFormat = name => (
`import { merge } from 'lodash';

const ${name}Reducer = (state, action) => {
  Object.freeze(state);
  switch(action.type) {
    default:
      return state;
  }
};

export default ${name}Reducer;`
);

const rootFormat = (imports, keyPairs) => (
`import { combineReducers } from 'redux';
${imports}

const rootReducer = combineReducers({
${keyPairs}
});

export default rootReducer;`
);

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
  let reducerFiles = fs.readdirSync('frontend/reducers');

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

        writeStream.write(rootFormat(importStatements, keyPairStatements));
      } else {
        writeStream.write(reducerFormat(nameLCC));
      }

      writeStream.end();

      logFunctions.createFileLog(`frontend/reducers/${nameSC}_reducer.js`);
    }
  });


};

let reducerArr = ['session_reducer.js', 'user_reducer.js', 'test_reducer.js'];

module.exports = createReducer;
