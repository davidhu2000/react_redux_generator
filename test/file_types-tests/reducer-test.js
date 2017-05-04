let chai = require('chai');
let assert = chai.assert;
let expect = chai.expect;
let sinon = require('sinon');
chai.use(require('chai-fs'));

let Promise = require('bluebird');
let rm = Promise.promisify(require('shelljs').rm);

let generateReducer = Promise.promisify(require('../../file_types/reducer.js'));

describe('Reducer Generator', () => {
  afterEach(() => {
    Promise.resolve(rm('-r', 'frontend'));
  });

  it('should create root_reducer.js if name is root', () => {
    Promise.resolve(generateReducer("root", [])).then(() => {
      expect('frontend/reducers/root_reducer.js').to.be.a.file();
      expect('frontend/reducers/root_reducer.js').to.be.a.file().with.contents.that.match(/rootReducer/);
      expect('frontend/reducers/root_reducer.js').to.be.a.file().with.contents.that.match(/combineReducers/);
    });
  });

  it('should create a reducer if name is not root', () => {
    Promise.resolve(generateReducer("reduce", [])).then(() => {
      expect('frontend/reducers/reduce_reducer.js').to.be.a.file();
      expect('frontend/reducers/reduce_reducer.js').to.be.a.file().with.contents.that.match(/reduceReducer/);
      expect('frontend/reducers/reduce_reducer.js').to.be.a.file().with.contents.that.match(/return state/);
    });
  });

  it('should create a reducer with action constants if passed in actions', () => {
    Promise.resolve(generateReducer("full", ['action', 'cut'])).then(() => {
      expect('frontend/reducers/full_reducer.js').to.be.a.file();
      expect('frontend/reducers/full_reducer.js').to.be.a.file().with.contents.that.match(/ACTION/);
      expect('frontend/reducers/full_reducer.js').to.be.a.file().with.contents.that.match(/CUT/);
    });
  });

  it('should update root_reducer with correct import statements', () => {
    Promise.resolve(generateReducer("dos", [])).then(() => generateReducer('root', [])).then(() => {
      expect('frontend/reducers/tres_reducer.js').to.be.a.file();

      expect('frontend/reducers/root_reducer.js').to.be.a.file();
      expect('frontend/reducers/root_reducer.js').to.be.a.file().with.contents.that.match(/import dosReducer/);
      expect('frontend/reducers/root_reducer.js').to.be.a.file().with.contents.that.match(/dos: dosReducer/);
    });
  });

  it('should update root_reducer with correct import statements', () => {
    Promise.resolve(generateReducer("root", [])).then(() => generateReducer('tres', ['action', 'cut'])).then(() => {
      expect('frontend/reducers/root_reducer.js').to.be.a.file();
      expect('frontend/reducers/root_reducer.js').to.be.a.file().with.contents.that.match(/import tresReducer/);
      expect('frontend/reducers/root_reducer.js').to.be.a.file().with.contents.that.match(/tres: tresReducer/);

      expect('frontend/reducers/tres_reducer.js').to.be.a.file();
      expect('frontend/reducers/tres_reducer.js').to.be.a.file().with.contents.that.match(/ACTION/);
      expect('frontend/reducers/tres_reducer.js').to.be.a.file().with.contents.that.match(/CUT/);
    });
  });
});