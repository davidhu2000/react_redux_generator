let chai = require('chai');
let assert = chai.assert;
let expect = chai.expect;
let sinon = require('sinon');
chai.use(require('chai-fs'));

let Promise = require('bluebird');
let rm = Promise.promisify(require('shelljs').rm);

let generateUtil = Promise.promisify(require('../../file_types/util.js'));

describe('Util Generator', () => {
  after(() => {
    Promise.resolve(rm('-r', 'frontend'));
  });

  it('should create an empty util file when given empty array', () => {
    Promise.resolve(generateUtil('empty', [])).then(() => {
      expect('frontend/util/empty_util.js').to.be.a.file();
      expect('frontend/util/empty_util.js').to.be.a.file().and.not.have.contents.that.match(/export/);
    });
  });

  it('should create an util file with given utils', () => {
    Promise.resolve(generateUtil('test', ['doSomething'])).then(() => {
      expect('frontend/util/test_util.js').to.be.a.file();
      expect('frontend/util/test_util.js').to.be.a.file().with.contents.that.match(/export const doSomething = ()/);
    });
  });

  it('should create a blank ajax request if util has fetch in name', () => {
    Promise.resolve(generateUtil('fetch', ['fetchPuppy'])).then(() => {
      expect('frontend/util/fetch_util.js').to.be.a.file();
      expect('frontend/util/fetch_util.js').to.be.a.file().with.contents.that.match(/\$.ajax/);
    });
  });
});