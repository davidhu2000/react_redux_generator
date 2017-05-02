/* global rm */
let chai = require('chai');
let assert = chai.assert;
let expect = chai.expect;
let sinon = require('sinon');
chai.use(require('chai-fs'));
let Promise = require('bluebird');
let rm = Promise.promisify(require('shelljs').rm);

let generateBase = Promise.promisify(require('../../file_types/base.js'));

describe('Base Files Generator', () => {
  before(() => {
    Promise.resolve(generateBase('mocha'));
  });

  after(() => {
    Promise.resolve(rm('-r', 'frontend'));
  });

  it('should export a function', () => {
    expect(generateBase).to.exist;
    expect(generateBase).to.be.instanceOf(Function);
  });

  it('should create the app.jsx file', () => {
    expect('frontend/components/app.jsx').to.be.a.file();
  });

  it('should create the root.jsx file', () => {
    expect('frontend/components/root.jsx').to.be.a.file();
  });

  it('should create the entry entry', () => {
    expect('frontend/mocha.jsx').to.be.a.file();
  });

});