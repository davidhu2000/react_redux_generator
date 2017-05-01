let chai = require('chai');
let assert = chai.assert;
let expect = chai.expect;

let storeTemplates = require('../templates/store.js');

describe('Store Template', () => {
  describe('#storeFormat', () => {
    it('should export a storeFormat function', () => {
      expect(storeTemplates).to.exist;
      expect(storeTemplates).to.be.instanceOf(Function);
    });

    it('should render a store template', () => {
      let storeTest = [
        'import { createStore, applyMiddleware } from \'redux\';',
        'import thunk from \'redux-thunk\';',
        'import rootReducer from \'../reducers/root_reducer.js\';',
        '',
        'const _defaultState = {};',
        '',
        'const configureStore = (preloadedState = _defaultState) => (',
        '  createStore(',
        '    rootReducer,',
        '    preloadedState,',
        '    applyMiddleware(thunk)',
        '  )',
        ');',
        '',
        'export default configureStore;',
        ''
      ];

      let storeCode = storeTemplates().split('\n');

      assert.equal(storeTest.length, storeCode.length);

      for (let i = 0; i < storeTest.length; i++) {
        assert.equal(storeTest[i], storeCode[i]);
      }
    });
  });
});