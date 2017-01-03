#! /usr/bin/env node
require('shelljs/global');
const createReducer = require('./redux/reducer.js');

let method = process.argv[2];
let type = process.argv[3];
let name = process.argv[4];
let actions = process.argv.slice(4);
let path = pwd();


if(method === 'g' || method === 'generate') {
  if(type === 'reducer') {
    createReducer(path, name, actions);
  }
}

echo('done')
