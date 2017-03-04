## Reducer

**Root Reducer**

To generate a root reducer, run

```
redux g reducer root
```

This will generate a file `frontend/reducer/root_reducer.js`. The generator will search through the reducers folder to find all the reducers that are already there and create the necessary import statements and key value pairs for `combineReducers`. Whenever a new reducer is created, `root_reducer.js` will update to include the necessary `import` statement and key-value pair for `combineReducers`

```js
import { combineReducers } from 'redux';
import sessionReducer from './session_reducer.js';

const rootReducer = combineReducers({
  session: sessionReducer
});

export default rootReducer;
```

**Other Reducers**

To generate a reducer, run

```
redux g reducer <name> [action1] [action2]
```

_Do not enter `_reducer.js` as part of the name_

For example:

```
redux g reducer session receiveUser receiveErrors clearErrors
```

This will generate a file `frontend/reducer/session_reducer.js`:

```js
import { merge } from 'lodash';
import {
  RECEIVE_USER,
  RECEIVE_ERRORS,
  CLEAR_ERRORS } from "../actions/session_actions.js"

const sessionReducer = (state, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      // your code here
    case RECEIVE_ERRORS:
      // your code here
    case CLEAR_ERRORS:
      // your code here
    default:
      return state;
  }
};

export default sessionReducer;
```
