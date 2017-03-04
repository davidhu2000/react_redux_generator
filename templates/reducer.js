const caseConverter = require('../helpers/case_converter.js');

const reducer = (nameLCC, actions)  => {
  nameSC = caseConverter.convert(nameLCC, caseConverter.toSnakeCase);
  let actionFilePath = `../actions/${nameSC}_actions.js`;

  let actionsSSC = actions.map( action => (
    `  ${caseConverter.convert(action, caseConverter.toScreamingSnakeCase)}`
  ));

  console.log(actionsSSC);

  actionImport = `import {
${actionsSSC.join(',\n')} } from "${actionFilePath}"
`

  return (
`import { merge } from 'lodash';
${actionImport}
const ${nameLCC}Reducer = (state, action) => {
  Object.freeze(state);
  switch(action.type) {
    default:
      return state;
  }
};

export default ${nameLCC}Reducer;`
  );
};

const root = (imports, keyPairs) => (
`import { combineReducers } from 'redux';
${imports}
const rootReducer = combineReducers({
${keyPairs}});

export default rootReducer;`
);

module.exports = {
  reducer,
  root
};
