let chai = require('chai');
let assert = chai.assert;
let expect = chai.expect;

let componentTemplates = require('../../templates/component.js');

describe('Component Templates', () => {
  let componentName1;
  let componentName2;

  beforeEach(() => {
    componentName1 = 'testComponent';
    componentName2 = 'someOtherName';
  });

  describe('#functional', () => {
    it('should export functional function', () => {
      expect(componentTemplates.functional).to.exist;
      expect(componentTemplates.functional).to.be.instanceOf(Function);
    });

    it('should return correct template', () => {
      let functionalTest = [
        'import React from \'react\';',
        '',
        'const testComponent = (props) => (',
        '',
        ');',
        '',
        'export default testComponent;',
        ''
      ];

      let functionalCode = componentTemplates.functional(componentName1).split('\n');

      assert.equal(functionalTest.length, functionalCode.length);

      for (let i = 0; i < functionalTest.length; i++) {
        assert.equal(functionalTest[i], functionalCode[i]);
      }
    });

    it('should use the passed in component name', () => {
      let functionalCode = componentTemplates.functional(componentName2);
      expect(functionalCode).to.include(componentName2);
    });
  });

  describe('#presentational', () => {
    it('should export presentational function', () => {
      expect(componentTemplates.presentational).to.exist;
      expect(componentTemplates.presentational).to.be.instanceOf(Function);
    });

    it('should return correct template', () => {
      let presentationalTest = [
        'import React from \'react\';',
        '',
        'class testComponent extends React.Component {',
        '  constructor(props) {',
        '    super(props);',
        '  }',
        '',
        '  render() {',
        '    return (',
        '      <div>',
        '        // your code here...',
        '      </div>',
        '    );',
        '  }',
        '}',
        '',
        'export default testComponent;',
        ''
      ];

      let presentationalCode = componentTemplates.presentational(componentName1).split('\n');

      assert.equal(presentationalTest.length, presentationalCode.length);

      for (let i = 0; i < presentationalTest.length; i++) {
        assert.equal(presentationalTest[i], presentationalCode[i]);
      }
    });

    it('should use the passed in component name', () => {
      let presentationalCode = componentTemplates.presentational(componentName2);
      expect(presentationalCode).to.include(componentName2);
    });
  });

  describe('#container', () => {
    it('should export container function', () => {
      expect(componentTemplates.container).to.exist;
      expect(componentTemplates.container).to.be.instanceOf(Function);
    });

    it('should return correct template', () => {
      let containerTest = [
        'import React from \'react\';',
        'import { connect } from \'react-redux\';',
        'import TestComponent from \'./test_component.jsx\';',
        '',
        'const mapStateToProps = (state, ownProps) => ({',
        '  // your code here...',
        '});',
        '',
        'const mapDispatchToProps = dispatch => ({',
        '  // your code here...',
        '});',
        '',
        'export default connect(',
        '  mapStateToProps,',
        '  mapDispatchToProps',
        ')(TestComponent);',
        ''
      ];

      let containerCode = componentTemplates.container('TestComponent', 'test_component').split('\n');

      assert.equal(containerTest.length, containerCode.length);

      for (let i = 0; i < containerTest.length; i++) {
        assert.equal(containerTest[i], containerCode[i]);
      }
    });

    it('should use the passed in component name', () => {
      let nameUCC = 'AnotherComponent';
      let nameSC = 'another_component';
      let presentationalCode = componentTemplates.container(nameUCC, nameSC);
      expect(presentationalCode).to.include(nameUCC);
      expect(presentationalCode).to.include(nameSC);
    });
  });
});