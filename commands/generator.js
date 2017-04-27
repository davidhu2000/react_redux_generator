const generateAction    = require('../fileTypes/action.js');
const generateBase      = require('../fileTypes/base.js');
const generateComponent = require('../fileTypes/component.js');
const generateReducer   = require('../fileTypes/reducer.js');
const generateStore     = require('../fileTypes/store.js');
const generateUtil      = require('../fileTypes/util.js');

const generator = (type, name, actions) => {
  console.log(type);
  switch(type) {
    case (type.match(/cycles?/) || {}).input:
      generateReducer(name, actions);
      generateAction(name, actions);
      generateComponent(name, actions);
      generateUtil(name, actions);
      break;
    case (type.match(/reducers?/) || {}).input:
      generateReducer(name, actions);
      break;
    case (type.match(/stores?/) || {}).input:
      generateStore();
      break;
    case (type.match(/actions?/) || {}).input:
      generateAction(name, actions);
      break;
    case (type.match(/utils?/) || {}).input:
      generateUtil(name, actions);
      break;
    case (type.match(/components?/) || {}).input:
      generateComponent(name, actions);
      break;
    case (type.match(/bases?/) || {}).input:
      generateBase(name);
      generateStore();
      break;
  }
};

module.exports = generator;
