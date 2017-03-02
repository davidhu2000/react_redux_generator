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

let possibleTypes = ['reducers', 'stores', 'actions', 'utils', 'components', 'bases'].join('');
let method        = process.argv[2];
let type          = process.argv[3];
let name          = process.argv[4];
let actions       = process.argv.slice(5);

if (['help', '--help', '-h'].includes(method)) {
  helpTemplates.helpTemplate();

} else if (['version', '-v', '--version'].includes(method)) {
  console.log('v' + require('./package.json').version);

} else if (possibleTypes.includes(type) === false) {
  logFunctions.noMethodErrorLog();

} else if(name === undefined && type !== 'store') {
  logFunctions.noNameErrorLog(type);

} else {

  if(method === 'g' || method === 'generate') {

    switch(type) {
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
  }
}
