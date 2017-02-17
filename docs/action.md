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
