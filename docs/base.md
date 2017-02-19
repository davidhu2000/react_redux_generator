## Base files

Running

```
redux generate base <projectName>
```

or

```
redux g base <projectName>
```

will create 4 files. `g` is simply an alias for `generate`.

```
frontend/<projectName>.jsx
frontend/components/app.jsx
frontend/components/root.jsx
frontend/store/store.js
```

```js
// project_name.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  ReactDOM.render(<Root store={ store } />, root);
});

// root.jsx
import React from 'react';
import { Provider } from 'react-redux';
import App from './app.jsx';

const Root = ({ store }) => (
  <Provider store={ store }>
    <App />
  </Provider>
);

export default Root;

// app.jsx
import React from 'react';

const App = ({ store }) => (
  <div>
    <h1>App</h1>
  </div>
);

export default App;
```

See [store](store.md) for template information about the store.
