let chai = require('chai');
let assert = chai.assert;
let expect = chai.expect;

let baseTemplates = require('../../templates/base.js');

describe('Base Templates', () => {
  describe('#appJSX', () => {
    it('should export appJSX function', () => {
      expect(baseTemplates.appJSX).to.exist;
      expect(baseTemplates.appJSX).to.be.instanceOf(Function);
    });

    it('should return correct template', () => {
      let appTest = ['import React from \'react\';',
        '',
        'const App = ({ store }) => (',
        '  <div>',
        '    <h1>App</h1>',
        '  </div>',
        ');',
        '',
        'export default App;',
        ''
      ];

      let appCode = baseTemplates.appJSX().split('\n');

      assert.equal(appTest.length, appCode.length);

      for (let i = 0; i < appTest.length; i++) {
        assert.equal(appTest[i], appCode[i]);
      }
    });
  });

  describe('#rootJSX', () => {
    it('should export rootJSX function', () => {
      expect(baseTemplates.rootJSX).to.exist;
      expect(baseTemplates.rootJSX).to.be.instanceOf(Function);
    });

    it('should return correct template', () => {
      let rootTest = ['import React from \'react\';',
        'import { Provider } from \'react-redux\';',
        'import App from \'./app.jsx\';',
        '',
        'const Root = ({ store }) => (',
        '  <Provider store={ store }>',
        '    <App />',
        '  </Provider>',
        ');',
        '',
        'export default Root;',
        ''
      ];

      let rootCode = baseTemplates.rootJSX().split('\n');

      assert.equal(rootTest.length, rootCode.length);

      for (let i = 0; i < rootTest.length; i++) {
        assert.equal(rootTest[i], rootCode[i]);
      }
    });
  });

  describe('#entryJSX', () => {
    it('should export entryJSX function', () => {
      expect(baseTemplates.entryJSX).to.exist;
      expect(baseTemplates.entryJSX).to.be.instanceOf(Function);
    });

    it('should return correct template', () => {
      let entryTest = ['import React from \'react\';',
        'import ReactDOM from \'react-dom\';',
        'import configureStore from \'./store/store.js\';',
        'import Root from \'./components/root\';',
        '',
        'document.addEventListener(\'DOMContentLoaded\', () => {',
        '  const root = document.getElementById(\'root\');',
        '  const store = configureStore();',
        '',
        '  ReactDOM.render(<Root store={ store } />, root);',
        '});',
        ''
      ];

      let entryCode = baseTemplates.entryJSX().split('\n');

      assert.equal(entryTest.length, entryCode.length);

      for (let i = 0; i < entryTest.length; i++) {
        assert.equal(entryTest[i], entryCode[i]);
      }
    });
  });
});