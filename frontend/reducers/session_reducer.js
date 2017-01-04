import { merge } from 'lodash';

const sessionReducer = (state, action) => {
  Object.freeze(state);
  switch(action.type) {
    case 'this':
      console.log('hello');
    default:
      return state;
  }
}

export default sessionReducer;
