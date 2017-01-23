#! /usr/bin/env node
require('shelljs/global');

const logFunctions      = require('./helpers/logs.js');
const helpTemplates     = require('./templates/help.js');

const generateAction    = require('./redux/action.js');
const generateBase      = require('./redux/base.js');
const generateComponent = require('./redux/component.js');
const generateReducer   = require('./redux/reducer.js');
const generateStore     = require('./redux/store.js');
const generateUtil      = require('./redux/util.js');

let possibleTypes = ['reducer', 'store', 'action', 'util', 'component', 'base'];
let method        = process.argv[2];
let type          = process.argv[3];
let name          = process.argv[4];
let actions       = process.argv.slice(5);
let path          = pwd();

if (['help', '--help', '-h'].includes(method)) {
  helpTemplates.helpTemplate();
} else if (possibleTypes.includes(type) === false) {
  logFunctions.noMethodErrorLog();
} else if(name === undefined && type !== 'store') {
  logFunctions.noNameErrorLog(type);
} else {
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
    }
  }
}
