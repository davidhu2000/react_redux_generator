let chai = require('chai');
let assert = chai.assert;
let expect = chai.expect;
let sinon = require('sinon');

let caseConverter = require('../../helpers/case_converter.js');

describe('Case Converter', () => {
  let snakeCase, upperCamelCase, lowerCamelCase, screamingSnakeCase;
  let snakeCaseWords, upperCamelCaseWords, lowerCamelCaseWords, screamingSnakeCaseWords;

  beforeEach(() => {
    snakeCase = 'mocha_chai_latte';
    snakeCaseWords = ['mocha', 'chai', 'latte'];

    upperCamelCase = 'MochaChaiLatte';
    upperCamelCaseWords = ['Mocha', 'Chai', 'Latte'];

    lowerCamelCase = 'mochaChaiLatte';
    lowerCamelCaseWords = ['mocha', 'Chai', 'Latte'];

    screamingSnakeCase = 'MOCHA_CHAI_LATTE';
    screamingSnakeCaseWords = ['MOCHA', 'CHAI', 'LATTE'];
  });

  describe('#toSnakeCase', () => {
    it('should be a function', () => {
      expect(caseConverter.toSnakeCase).to.exist;
      expect(caseConverter.toSnakeCase).to.be.instanceOf(Function);
    });

    it('should receive string in snake case and return string in snake case', () => {
      assert.equal(caseConverter.toSnakeCase(snakeCaseWords), snakeCase);
    });

    it('should receive string in upper camel case and return string in snake case', () => {
      assert.equal(caseConverter.toSnakeCase(upperCamelCaseWords), snakeCase);
    });

    it('should receive string in lower camel case and return string in snake case', () => {
      assert.equal(caseConverter.toSnakeCase(lowerCamelCaseWords), snakeCase);
    });

    it('should receive string in screaming snake case and return string in snake case', () => {
      assert.equal(caseConverter.toSnakeCase(screamingSnakeCaseWords), snakeCase);
    });
  });

  describe('#toUpperCamelCase', () => {
    it('should be a function', () => {
      expect(caseConverter.toUpperCamelCase).to.exist;
      expect(caseConverter.toUpperCamelCase).to.be.instanceOf(Function);
    });

    it('should receive string in snake case and return string in upper camel case', () => {
      assert.equal(caseConverter.toUpperCamelCase(snakeCaseWords), upperCamelCase);
    });

    it('should receive string in upper camel case and return string in upper camel case', () => {
      assert.equal(caseConverter.toUpperCamelCase(upperCamelCaseWords), upperCamelCase);
    });

    it('should receive string in lower camel case and return string in upper camel case', () => {
      assert.equal(caseConverter.toUpperCamelCase(lowerCamelCaseWords), upperCamelCase);
    });

    it('should receive string in screaming snake case and return string in upper camel case', () => {
      assert.equal(caseConverter.toUpperCamelCase(screamingSnakeCaseWords), upperCamelCase);
    });
  });

  describe('#toLowerCamelCase', () => {
    it('should be a function', () => {
      expect(caseConverter.toLowerCamelCase).to.exist;
      expect(caseConverter.toLowerCamelCase).to.be.instanceOf(Function);
    });

    it('should receive string in snake case and return string in lower camel case', () => {
      assert.equal(caseConverter.toLowerCamelCase(snakeCaseWords), lowerCamelCase);
    });

    it('should receive string in upper camel case and return string in lower camel case', () => {
      assert.equal(caseConverter.toLowerCamelCase(upperCamelCaseWords), lowerCamelCase);
    });

    it('should receive string in lower camel case and return string in lower camel case', () => {
      assert.equal(caseConverter.toLowerCamelCase(lowerCamelCaseWords), lowerCamelCase);
    });

    it('should receive string in screaming snake case and return string in lower camel case', () => {
      assert.equal(caseConverter.toLowerCamelCase(screamingSnakeCaseWords), lowerCamelCase);
    });
  });

  describe('#toScreamingSnakeCase', () => {
    it('should be a function', () => {
      expect(caseConverter.toScreamingSnakeCase).to.exist;
      expect(caseConverter.toScreamingSnakeCase).to.be.instanceOf(Function);
    });

    it('should receive string in snake case and return string in screaming snake case', () => {
      assert.equal(caseConverter.toScreamingSnakeCase(snakeCaseWords),screamingSnakeCase);
    });

    it('should receive string in upper camel case and return string in screaming snake case', () => {
      assert.equal(caseConverter.toScreamingSnakeCase(upperCamelCaseWords), screamingSnakeCase);
    });

    it('should receive string in lower camel case and return string in screaming snake case', () => {
      assert.equal(caseConverter.toScreamingSnakeCase(lowerCamelCaseWords), screamingSnakeCase);
    });

    it('should receive string in screaming snake case and return string in screaming snake case', () => {
      assert.equal(caseConverter.toScreamingSnakeCase(screamingSnakeCaseWords), screamingSnakeCase);
    });
  });

  describe('#convert', () => {
    let func;

    beforeEach(() => {
      func = sinon.spy();
    });

    it('should be a function', () => {
      expect(caseConverter.convert).to.exist;
      expect(caseConverter.convert).to.be.instanceOf(Function);
    });

    it('should run callback once', () => {
      caseConverter.convert('word', func);
      assert(func.calledOnce);
    });
  });
});