require('shelljs/global');
const fs = require('fs');

const caseConverter = require('../helpers/case_converter.js');

const appJSX = () => (
`import React from 'react';

const App = ({ store }) => (
  <div>
    <h1>App</h1>
  </div>
);

export default App;
`
);

const rootJSX = () => (
`import React from 'react';
import { Provider } from 'react-redux';
import App from './app.jsx';

const Root = ({ store }) => (
  <Provider store={ store }>
    <App />
  </Provider>
);

export default Root;
`
);

const entryJSX = () => (
`import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  ReactDOM.render(<Root store={ store } />, root);
});
`
);

const generateOne = (path, name) => {
  fs.exists(`${path}/${name}.jsx`, (exists) => {
    if(exists) {
      console.log('Store already exists. I cannot afford to overwrite it.');
      return;
    } else {
      mkdir('-p',`${path}/`);
      cd(path);
      var writeStream = fs.createWriteStream(`${name}.jsx`);

      switch(name) {
        case 'app':
          writeStream.write(appJSX());
          break;
        case 'root':
          writeStream.write(rootJSX());
          break;
        default:
          writeStream.write(entryJSX());
      }
      writeStream.end();

      if (path.split('/').length === 2) {
        cd('../..');
      } else {
        cd('..');
      }
    }
  });
};

const generateBase = (name) => {
  name = caseConverter.convert(name, caseConverter.toSnakeCase);

  generateOne('frontend/components', 'app');
  generateOne('frontend/components', 'root');
  generateOne('frontend/', `${name}`);

};

module.exports = generateBase;
