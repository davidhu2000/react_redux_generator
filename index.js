#! /usr/bin/env node
require('shelljs/global');
const generateReducer = require('./redux/reducer.js');
const generateStore = require('./redux/store.js');

let method = process.argv[2];
let type = process.argv[3];
let name = process.argv[4];
let actions = process.argv.slice(4);
let path = pwd();


if(method === 'g' || method === 'generate') {
  switch(type) {
    case 'reducer':
      generateReducer(path, name, actions);
      break;
    case 'store':
      generateStore();
      break;
    default:
      console.log('Undefined type.');
  }
}

echo('done')
