# React-Redux File Generator

[![npm version](https://badge.fury.io/js/redux-file-gen.svg)](https://badge.fury.io/js/redux-file-gen)

This generator helps to create the necessary files for a react-redux application. It follows the file structure below. The `frontend` folder is stored at the root directory of the application.

## Installation
```
npm install -g redux-file-gen
```

In order to create the terminal command `redux`, this package needs to be installed globally.

## Example file structure

```
frontend
  |- actions
    |- session_actions.js
  |- components
    |- session_form
      |- session_form.jsx
      |- session_form_container.jsx
    |- app.jsx
    |- root.jsx
  |- reducers
    |- root_reducer.js
    |- session_reducer.js
  |- store
    |- store.js
  |- util
    |- api_util.js
  |- project_name.jsx
```

**Table of Content:**
- [Base](#base)
- [Action](#action)
- [Component](#component)
- [Reducer](#reducer)
- [Store](#store)
- [Utility](#util)

## Command helps
To see all the available commands from the terminal, run
```
redux help
```
or
```
redux --help
```
or
```
redux -h
```

## Base files

Running

```
redux generate base project_name
```

or

```
redux g base project_name
```

will create 4 files. `g` is simply an alias for `generate`.

```
frontend/project_name.jsx
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

## Action

To generate an action file, run

```
redux g action [name] [action1] [action2] ...
```

_Do not enter `_actions.js` as part of the name_

For example:

```
redux g action session receiveUser receiveError
```

The generator will create a file `frontend/actions/session_actions.js` in the actions folder. It will interpret the actions to create constants and action objects. In this example, it will create a `.js` file like below:

```js
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ERROR = 'RECEIVE_ERROR';

export const receiveUser = () => ({
  type: RECEIVE_USER
});

export const receiveError = () => ({
  type: RECEIVE_ERROR
});
```

## Component

To generate a component run

```
redux g component [name]
```

For example,

```
redux g component user
```

This will generate two files

- `/frontend/components/user.jsx`

```js
import React from 'react';

class User extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        // your code here...
      </div>
    )
  }
}

export default User;
```

- `/frontend/components/user_container.jsx`

```js
import React from 'react';
import { connect } from 'react-redux';
import User from './user.jsx';

const mapStateToProps = props => ({
  // your code here...
});

const mapDispatchToProps = dispatch => ({
  // your code here...
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
```

## Reducer

**Root Reducer**

To generate a root reducer, run

```
redux g reducer root
```

This will generate a file `frontend/reducer/root_reducer.js`:

```js
import { combineReducers } from 'redux';

const rootReducer = combineReducers({

});

export default rootReducer;
```

**Other Reducers**

To generate a reducer, run

```
redux g reducer [name]
```

_Do not enter `_reducer.js` as part of the name_

For example:

```
redux g reducer session
```

This will generate a file `frontend/reducer/session_reducer.js`:

```js
import { merge } from 'lodash';

const sessionReducer = (state, action) => {
  Object.freeze(state);
  switch(action.type) {
    default:
      return state;
  }
}

export default sessionReducer;
```
## Store

To generate a store, run the following code in the terminal:

```
redux g store
```

This will generate `frontend/store/store.js`:

```js
import { createStore, applyMiddleware } from 'redux';
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
```

## Utility

To generate a utility file, run

```
redux g util [name] [action1] [action2] ...
```

For example:

```
redux g util api requestUsers requestUser
```

This will create a file `frontend/util/api_util.js`:

```js
export const requestUsers = () => (
  // your code here;
);

export const requestUser = () => (
  // your code here;
);
```
