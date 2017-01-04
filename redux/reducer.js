require('shelljs/global');
const fs = require('fs');

const reducerFormat = name => (
`import { merge } from 'lodash';

const ${name}Reducer = (state, action) => {
  Object.freeze(state);
  switch(action.type) {
    default:
      return state;
  }
}

export default ${name}Reducer;`
);

const rootFormat = () => (
`import { combineReducers } from 'redux';

const rootReducer = combineReducers(
);

export default rootReducer;`
);


const createReducer = (path, name, ...actions) => {
  name = name.toLowerCase();

  fs.exists(`frontend/reducers/${name}_reducer.js`, (exists) => {
    if(exists) {
      console.log('Reducer already exists. I have no overwriting power.');
      return;
    }
  });

  let filename = `${name}_reducer.js`;
  mkdir('-p',`frontend/reducers/`);
  cd('frontend/reducers');

  var writeStream = fs.createWriteStream(filename);
  if (name === 'root') {
    writeStream.write(rootFormat());
  } else {
    writeStream.write(reducerFormat(name));
  }

  writeStream.end();
};

module.exports = createReducer;
