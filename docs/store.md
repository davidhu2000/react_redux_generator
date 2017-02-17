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
