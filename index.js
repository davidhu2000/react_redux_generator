#! /usr/bin/env node
require('shelljs/global');

const generateReducer = require('./redux/reducer.js');
const generateStore = require('./redux/store.js');
const generateAction = require('./redux/action.js');
const generateUtil = require('./redux/util.js');
const generateComponent = require('./redux/component.js');
const generateBase = require('./redux/base.js');

let method = process.argv[2];
let type = process.argv[3];
let name = process.argv[4];
let actions = process.argv.slice(5);
let path = pwd();

if(method === 'g' || method === 'generate') {
  switch(type) {
    case 'reducer':
      generateReducer(path, name, actions);
      break;
    case 'store':
      generateStore();
      break;
    case 'action':
      generateAction(name, actions);
      break;
    case 'util':
      generateUtil(name, actions);
      break;
    case 'component':
      generateComponent(name, actions);
      break;
    case 'base':
      generateBase(name);
      generateStore();
      break;
    default:
      console.log('Undefined type.');
  }
} else {
  console.log('I am not sure what you want to create...');
}
