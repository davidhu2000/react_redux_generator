require('shelljs/global');
const fs = require('fs');

const logFunctions = require('../helpers/logs.js');

const storeFormat = () => (
`import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer.js';

const preloadedState = {};

const configureStore = (preloadedState) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware()
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
      logFunctions.createFileLog(`frontend/store/store.js`);
    }
  });
};

module.exports = generateStore;
