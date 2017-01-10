require('shelljs/global');
const fs = require('fs');

const logFunctions = require('../helpers/logs.js');

const storeFormat = () => (
`import { createStore, applyMiddleware } from 'redux';
import thunk from 'react-redux';
import rootReducer from '../reducers/root_reducer.js';

const _defaultState = {};

const configureStore = (preloadedState = _defaultState) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk)
  )
);

export default configureStore;
`
);

const generateStore = () => {

  fs.exists(`frontend/store/store.js`, (exists) => {
    if(exists) {
      logFunctions.fileExistErrorLog();
    } else {
      mkdir('-p',`frontend/store/`);
      cd('frontend/store');
      var writeStream = fs.createWriteStream('store.js');
      writeStream.write(storeFormat());
      writeStream.end();
      cd('../..');
      logFunctions.createFileLog(`frontend/store/store.js`);
    }
  });
};

module.exports = generateStore;
