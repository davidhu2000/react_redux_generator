let chai = require('chai');
let assert = chai.assert;
let expect = chai.expect;
let sinon = require('sinon');
require('mocha-sinon');

let helpTemplates = require('../../templates/help.js');

describe('Help Templates', () => {
  let spy;

  beforeEach(() => {
    spy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    spy.restore();
  });

  describe('#helpTemplate', () => {
    beforeEach(() => {
      helpTemplates.helpTemplate();
    });

    it('should export basicHelp function', () => {
      expect(helpTemplates.helpTemplate).to.exist;
      expect(helpTemplates.helpTemplate).to.be.instanceOf(Function);
    });

    it('should call console logs', () => {
      expect(spy.called).to.be.true;
    });
  });
});