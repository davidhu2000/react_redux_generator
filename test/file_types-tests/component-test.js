/* global rm */
let chai = require('chai');
let assert = chai.assert;
let expect = chai.expect;
let sinon = require('sinon');
chai.use(require('chai-fs'));

let Promise = require('bluebird');
let rm = Promise.promisify(require('shelljs').rm);

let generateComponent = Promise.promisify(require('../../file_types/component.js'));

describe('Component Generator', () => {

  after(() => {
    Promise.resolve(rm('-r', 'frontend'));
  });

  it('should generate a component file and a container file', () => {
    Promise.resolve(generateComponent('bothTypes', [])).then(() => {
        expect('frontend/components/both_types/index.jsx').to.be.a.file();
        expect('frontend/components/both_types/both_types.jsx').to.be.a.file();
    });
  });

  it('should generate a function component file when receive -f flag', () => {
    Promise.resolve(generateComponent('functional', ['-f'])).then(() => {
      expect('frontend/components/functional/functional.jsx').to.be.a.file().with.content(`import React from 'react';

const Functional = (props) => (

);

export default Functional;
`);

    });
  });

  it('should not generate a container file when receive the -nc flag', () => {
    Promise.resolve(generateComponent('noContainer', ['-nc'])).then(() => {
      expect('frontend/components/no_container/no_container.jsx').to.be.a.file();
      expect('frontend/components/no_container/index.jsx').to.not.be.a.file();
    });
  });


});