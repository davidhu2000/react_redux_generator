const caseConverter = require('../helpers/case_converter.js');

const reducer = (nameLCC, actions)  => {
  nameSC = caseConverter.convert(nameLCC, caseConverter.toSnakeCase);
  let actionFilePath = `../actions/${nameSC}_actions.js`;

  let actionsSSC = actions.map( action => (
    `${caseConverter.convert(action, caseConverter.toScreamingSnakeCase)}`
  ));

  let actionImport = `import {
  ${actionsSSC.join(',\n  ')} } from "${actionFilePath}"
`

  let actionCase = actionsSSC.map(action => (
    `    case ${action}:
      // your code here`
  )).join('\n')

  return (
`import { merge } from 'lodash';
${actionImport}

_defaultState = {}

const ${nameLCC}Reducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
${actionCase}
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
${keyPairs}
});

export default rootReducer;`
);

module.exports = {
  reducer,
  root
};
