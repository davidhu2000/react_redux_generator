require('shelljs/global');

var fs = require('fs');

function createReducer(path, name, ...actions){
  let filename = `${name}_reducer.js`;
  mkdir('-p',`frontend/reducers/`);
  cd('frontend/reducers');

  var writeStream = fs.createWriteStream(filename);
  writeStream.write(`import { merge } from 'lodash';

const ${name.toLowerCase()}Reducer = (state, action) => {
  Object.freeze(state);
  switch(action.type) {
    default:
      return state;
  }
}

export default ${name.toLowerCase()}Reducer;

  `);

  writeStream.end();
}

module.exports = createReducer;
