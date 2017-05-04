let chai = require('chai');
let assert = chai.assert;
let expect = chai.expect;
let sinon = require('sinon');
chai.use(require('chai-fs'));
let Promise = require('bluebird');
let rm = Promise.promisify(require('shelljs').rm);

let generateAction = Promise.promisify(require('../../file_types/action.js'));

describe('Action Generator', () => {
  let actions;

  afterEach(() => {
    Promise.resolve(rm('-r', 'frontend'));
  });

  it('should export a function', () => {
    expect(generateAction).to.exist;
    expect(generateAction).to.be.instanceOf(Function);
  });

  it('should create an empty action file with empty actions array', () => {
    Promise.resolve(generateAction('test', [])).then(() => {
      expect('frontend/actions/test_actions.js').to.be.a.file().with.content('\n\n'); 
    });
  });

  it('should create a file with action constants', () => {
    Promise.resolve(generateAction('another', ['actionUno', 'actionDos'])).then(() => {
      expect('frontend/actions/another_actions.js').to.be.a.file();
      expect('frontend/actions/another_actions.js').to.be.a.file().with.contents.that.match(/export const ACTION_UNO = 'ACTION_UNO'/);
      expect('frontend/actions/another_actions.js').to.be.a.file().with.contents.that.match(/export const ACTION_DOS = 'ACTION_DOS'/);
      expect('frontend/actions/another_actions.js').to.be.a.file().with.contents.that.match(/export const actionUno/);
      expect('frontend/actions/another_actions.js').to.be.a.file().with.contents.that.match(/type: ACTION_UNO/);
    });
  }); 

  it('should not overwrite existing file', () => {
    Promise.resolve(generateAction('test', ['not'])).then(() => {
      expect('frontend/actions/test_actions.js').to.be.a.file().and.not.have.content('not');
    });
  });
});