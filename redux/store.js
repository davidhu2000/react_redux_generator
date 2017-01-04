require('shelljs/global');
var fs = require('fs');

const storeFormat = () => (
`import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer.js';

const configureStore = (preloadedState = {}) => (
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
  mkdir('-p',`frontend/store/`);
  cd('frontend/store');
  var writeStream = fs.createWriteStream('store.js');
  writeStream.write(storeFormat());
  writeStream.end();
};

module.exports = generateStore;
