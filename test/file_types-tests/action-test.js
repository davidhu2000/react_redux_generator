/* global rm */
let chai = require('chai');
let assert = chai.assert;
let expect = chai.expect;
let sinon = require('sinon');
chai.use(require('chai-fs'));
require('shelljs');

let generateAction = require('../../file_types/action.js');

describe('Action Generator', () => {
  let actions;

  before(() => {
    actions = ['actionUno', 'actionDos'];
    generateAction('test', []);
    generateAction('another', actions);
  });

  after(() => {
    rm('-r', 'frontend');
  });

  it('should export a function', () => {
    expect(generateAction).to.exist;
    expect(generateAction).to.be.instanceOf(Function);
  });

  it('should create an empty action file with empty actions array', () => {
    expect('frontend/actions/test_actions.js').to.be.a.file().with.content('\n\n');
  });

  it('should create a file with action constants', () => {
    let content = `export const ACTION_UNO = 'ACTION_UNO';
export const ACTION_DOS = 'ACTION_DOS';

export const actionUno = () => ({
  type: ACTION_UNO
});

export const actionDos = () => ({
  type: ACTION_DOS
});
`;
    expect('frontend/actions/another_actions.js').to.be.a.file().with.content(content);
  }); 

  it('should not overwrite existing file', () => {
    generateAction('test', ['not']);
    expect('frontend/actions/test_actions.js').to.be.a.file().and.not.have.content('not');
  });
});