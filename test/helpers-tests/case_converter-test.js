let chai = require('chai');
let assert = chai.assert;
let expect = chai.expect;
let sinon = require('sinon');

let caseConverter = require('../../helpers/case_converter.js');

describe('Case Converter', () => {
  let snakeCase, pascalCase, camelCase, screamingSnakeCase;
  let snakeCaseWords, pascalCaseWords, camelCaseWords, screamingSnakeCaseWords;

  beforeEach(() => {
    snakeCase = 'mocha_chai_latte';
    snakeCaseWords = ['mocha', 'chai', 'latte'];

    pascalCase = 'MochaChaiLatte';
    pascalCaseWords = ['Mocha', 'Chai', 'Latte'];

    camelCase = 'mochaChaiLatte';
    camelCaseWords = ['mocha', 'Chai', 'Latte'];

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
      assert.equal(caseConverter.toSnakeCase(pascalCaseWords), snakeCase);
    });

    it('should receive string in lower camel case and return string in snake case', () => {
      assert.equal(caseConverter.toSnakeCase(camelCaseWords), snakeCase);
    });

    it('should receive string in screaming snake case and return string in snake case', () => {
      assert.equal(caseConverter.toSnakeCase(screamingSnakeCaseWords), snakeCase);
    });
  });

  describe('#toPascalCase', () => {
    it('should be a function', () => {
      expect(caseConverter.toPascalCase).to.exist;
      expect(caseConverter.toPascalCase).to.be.instanceOf(Function);
    });

    it('should receive string in snake case and return string in upper camel case', () => {
      assert.equal(caseConverter.toPascalCase(snakeCaseWords), pascalCase);
    });

    it('should receive string in upper camel case and return string in upper camel case', () => {
      assert.equal(caseConverter.toPascalCase(pascalCaseWords), pascalCase);
    });

    it('should receive string in lower camel case and return string in upper camel case', () => {
      assert.equal(caseConverter.toPascalCase(camelCaseWords), pascalCase);
    });

    it('should receive string in screaming snake case and return string in upper camel case', () => {
      assert.equal(caseConverter.toPascalCase(screamingSnakeCaseWords), pascalCase);
    });
  });

  describe('#toCamelCase', () => {
    it('should be a function', () => {
      expect(caseConverter.toCamelCase).to.exist;
      expect(caseConverter.toCamelCase).to.be.instanceOf(Function);
    });

    it('should receive string in snake case and return string in lower camel case', () => {
      assert.equal(caseConverter.toCamelCase(snakeCaseWords), camelCase);
    });

    it('should receive string in upper camel case and return string in lower camel case', () => {
      assert.equal(caseConverter.toCamelCase(pascalCaseWords), camelCase);
    });

    it('should receive string in lower camel case and return string in lower camel case', () => {
      assert.equal(caseConverter.toCamelCase(camelCaseWords), camelCase);
    });

    it('should receive string in screaming snake case and return string in lower camel case', () => {
      assert.equal(caseConverter.toCamelCase(screamingSnakeCaseWords), camelCase);
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
      assert.equal(caseConverter.toScreamingSnakeCase(pascalCaseWords), screamingSnakeCase);
    });

    it('should receive string in lower camel case and return string in screaming snake case', () => {
      assert.equal(caseConverter.toScreamingSnakeCase(camelCaseWords), screamingSnakeCase);
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
