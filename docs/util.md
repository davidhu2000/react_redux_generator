## Utility

To generate a utility file, run

```
redux g util <name> [action1] [action2] ...
```

For example:

```
redux g util api requestUsers requestUser
```

_Do not include `_util.js` as part of the name_

This will create a file `frontend/util/api_util.js`:

```js
export const requestUsers = () => (
  // your code here;
);

export const requestUser = () => (
  // your code here;
);
```
