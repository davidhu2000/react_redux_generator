let chai = require('chai');
let assert = chai.assert;
let expect = chai.expect;
let sinon = require('sinon');
chai.use(require('chai-fs'));

let Promise = require('bluebird');
let rm = Promise.promisify(require('shelljs').rm);

let generateStore = Promise.promisify(require('../../file_types/store.js'));

describe('Store Generator', () => {
  after(() => {
    Promise.resolve(rm('-r', 'frontend'));
  });

  describe('should generate a store file', () => {
    Promise.resolve(generateStore()).then(() => {
      expect('frontend/store/store.js').to.be.a.file();
      expect('frontend/store/store.js').to.be.a.file().with.contents.that.match(/configureStore/);
    });
  });
});