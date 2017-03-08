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

module.exports = {
  appJSX,
  entryJSX,
  rootJSX
};
