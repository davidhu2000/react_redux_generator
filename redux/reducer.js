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

const rootFormat = () => (
`import { combineReducers } from 'redux';

const rootReducer = combineReducers({

});

export default rootReducer;`
);

const createReducer = (path, name, ...actions) => {
  let nameLCC = caseConverter.convert(name, caseConverter.toLowerCamelCase);
  let nameSC = caseConverter.convert(name, caseConverter.toSnakeCase);

  fs.exists(`frontend/reducers/${nameSC}_reducer.js`, (exists) => {
    if(exists) {
      console.log(fs.readdirSync('frontend/reducers'));
      logFunctions.fileExistErrorLog();
    } else {
      let filename = `${nameSC}_reducer.js`;
      mkdir('-p',`frontend/reducers/`);
      cd('frontend/reducers');

      var writeStream = fs.createWriteStream(filename);
      if (name === 'root') {
        writeStream.write(rootFormat());
      } else {
        writeStream.write(reducerFormat(nameLCC));
      }

      writeStream.end();

      logFunctions.createFileLog(`frontend/reducers/${nameSC}_reducer.js`);
    }
  });


};

module.exports = createReducer;
