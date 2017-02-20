const reducer = name => (
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
