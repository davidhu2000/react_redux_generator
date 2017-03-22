## Utility

To generate a utility file, run

```
redux g util <name> [action1] [action2] ...
```

For example:

```
redux g util api fetchUsers getData
```

_Do not include `_util.js` as part of the name_

This will create a file `frontend/util/api_util.js`:

```js
export const fetchUsers = users => (
  $.ajax({
    method: '',
    url: '',
    data: ''
  })
);

export const getData = () => (
  // your code here
);
```

Having the word `fetch` in the util actions will automatically create a blank `ajax` request. 
