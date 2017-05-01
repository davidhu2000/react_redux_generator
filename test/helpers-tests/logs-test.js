let chai = require('chai');
let assert = chai.assert;
let expect = chai.expect;
let sinon = require('sinon');

let logs = require('../../helpers/logs.js');

describe('Logs', () => {
  let spy;

  beforeEach(() => {
    spy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    spy.restore();
  });

  describe('#fileExistErrorLog', () => {
    it('should export fileExistErrorLog function', () => {
      expect(logs.fileExistErrorLog).to.exist;
      expect(logs.fileExistErrorLog).to.be.instanceOf(Function);
    });

    it('should call console log once', () => {
      logs.fileExistErrorLog('exist_file.js');
      expect(spy.calledOnce).to.be.true;
    });
  });

  describe('#noMethodErrorLog', () => {
    it('should export noMethodErrorLog function', () => {
      expect(logs.noMethodErrorLog).to.exist;
      expect(logs.noMethodErrorLog).to.be.instanceOf(Function);
    });

    it('should call console log', () => {
      logs.noMethodErrorLog();
      expect(spy.called).to.be.true;
    });
  });

  describe('#noNameErrorLog', () => {
    it('should export noNameErrorLog function', () => {
      expect(logs.noNameErrorLog).to.exist;
      expect(logs.noNameErrorLog).to.be.instanceOf(Function);
    });

    it('should call console log', () => {
      logs.noNameErrorLog('fileType');
      expect(spy.called).to.be.true;
    });
  });

  describe('#createFileLog', () => {
    it('should export createFileLog function', () => {
      expect(logs.createFileLog).to.exist;
      expect(logs.createFileLog).to.be.instanceOf(Function);
    });

    it('should call console log', () => {
      logs.createFileLog('some_random_file');
      expect(spy.called).to.be.true;
    });
  });

  describe('#removedFileLog', () => {
    it('should export removedFileLog function', () => {
      expect(logs.removedFileLog).to.exist;
      expect(logs.removedFileLog).to.be.instanceOf(Function);
    });

    it('should call console log', () => {
      logs.removedFileLog('good_bye');
      expect(spy.called).to.be.true;
    });
  });

  describe('#noExistFileErrorLog', () => {
    it('should export noExistFileErrorLog function', () => {
      expect(logs.noExistFileErrorLog).to.exist;
      expect(logs.noExistFileErrorLog).to.be.instanceOf(Function);
    });

    it('should call console log', () => {
      logs.noExistFileErrorLog('noexistant_file');
      expect(spy.called).to.be.true;
    });
  });
});