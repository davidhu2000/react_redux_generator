## Action

To generate an action file, run

```
redux g action <name> [action1] [action2] ...
```

_Do not enter `_actions.js` as part of the name_

For example:

```
redux g action song receiveSong playSong
```

The generator will create a file `frontend/actions/song_actions.js` in the actions folder. It will interpret the actions to create constants and action objects. In this example, it will create a `.js` file like below:

```js
export const RECEIVE_SONG = 'RECEIVE_SONG';
export const PLAY_SONG = 'PLAY_SONG';

export const receiveSong = song => ({
  type: RECEIVE_SONG,
  song
});

export const playSong = () => ({
  type: PLAY_SONG
});
```

**Note:** The action generator will look for the word `receive` in the action names, and automatically add the argument name and key-value pair to the function. This is why `receiveSong` has a `song` argument and `song` value in the returned object. 
