let chai = require('chai');
let assert = chai.assert;
let expect = chai.expect;

let reducerTemplates = require('../../templates/reducer.js');

describe('Reducer Templates', () => {
  describe('#root', () => {
    it('should export the root function', () => {
      expect(reducerTemplates.root).to.exist;
      expect(reducerTemplates.root).to.be.instanceOf(Function);
    });

    it('should render empty template when both arguments are empty', () => {
      let rootTest = [
        'import { combineReducers } from \'redux\';',
        '',
        '',
        'const rootReducer = combineReducers({',
        '',
        '});',
        '',
        'export default rootReducer;'
      ];

      let rootCode = reducerTemplates.root('', '').split('\n');

      assert.equal(rootTest.length, rootCode.length);

      for (let i = 0; i < rootTest.length; i++) {
        assert.equal(rootTest[i], rootCode[i]);
      }
    });

    it('should render the with imports and key pairs', () => {
      let imports = "import userReducer from './user_reducer.js';";
      let keyPairs = "  user: userReducer";

      let rootTest = [
        'import { combineReducers } from \'redux\';',
        'import userReducer from \'./user_reducer.js\';',
        '',
        'const rootReducer = combineReducers({',
        '  user: userReducer',
        '});',
        '',
        'export default rootReducer;'
      ];

      let rootCode = reducerTemplates.root(imports, keyPairs).split('\n');

      assert.equal(rootTest.length, rootCode.length);

      for (let i = 0; i < rootTest.length; i++) {
        assert.equal(rootTest[i], rootCode[i]);
      }
    });
  });

  describe('#reducer', () => {
    it('should export the reducer function', () => {
      expect(reducerTemplates.reducer).to.exist;
      expect(reducerTemplates.reducer).to.be.instanceOf(Function);
    });

    it('should render empty template when no argument is passed in', () => {
      let reducerTest = [
        'import { merge } from \'lodash\';',
        '',
        'let _defaultState = {};',
        '',
        'const userReducer = (state = _defaultState, action) => {',
        '  Object.freeze(state);',
        '  switch(action.type) {',
        '    default:',
        '      return state;',
        '  }',
        '};',
        '',
        'export default userReducer;'
      ];

      let reducerCode = reducerTemplates.reducer('user', []).split('\n');

      assert.equal(reducerTest.length, reducerCode.length);

      for (let i = 0; i < reducerTest.length; i++) {
        assert.equal(reducerTest[i], reducerCode[i]);
      }
    });

    it('should render the with imports and key pairs', () => {
      let name = 'user';
      let actions = ['receiveUser', 'clearUser'];
      let reducerTest = [
        'import { merge } from \'lodash\';',
        'import {',
        '  RECEIVE_USER,',
        '  CLEAR_USER } from "../actions/user_actions.js";',
        '',
        'let _defaultState = {};',
        '',
        'const userReducer = (state = _defaultState, action) => {',
        '  Object.freeze(state);',
        '  switch(action.type) {',
        '    case RECEIVE_USER:',
        '      // your code here',
        '    case CLEAR_USER:',
        '      // your code here',
        '    default:',
        '      return state;',
        '  }',
        '};',
        '',
        'export default userReducer;'
      ];

      let reducerCode = reducerTemplates.reducer(name, actions).split('\n');

      assert.equal(reducerTest.length, reducerCode.length);

      for (let i = 0; i < reducerTest.length; i++) {
        assert.equal(reducerTest[i], reducerCode[i]);
      }
    });
  });
});