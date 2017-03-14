#! /usr/bin/env node
require('shelljs/global');

const logFunctions      = require('./helpers/logs.js');
const helpTemplates     = require('./templates/help.js');

const generator         = require('./commands/generator.js');
const remover           = require('./commands/remover.js');

let possibleTypes = ['reducers', 'stores', 'actions', 'utils', 'components', 'bases'].join('');
let method        = process.argv[2];
let type          = process.argv[3];
let name          = process.argv[4];
let actions       = process.argv.slice(5);

if (['help', '--help', '-h', undefined].includes(method)) {
  helpTemplates.helpTemplate();

} else if (['version', '-v', '--version'].includes(method)) {
  console.log('v' + require('./package.json').version);

} else if (possibleTypes.includes(type) === false) {
  logFunctions.noMethodErrorLog();

} else if(name === undefined && type !== 'store') {
  logFunctions.noNameErrorLog(type);

} else {
  if(method === 'g' || method === 'generate') {
    generator(type, name, actions);
  } else if (method === 'r' || method === 'remove') {
    remover(type, name);
  }
}
