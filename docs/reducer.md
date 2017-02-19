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
redux g reducer <name>
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
