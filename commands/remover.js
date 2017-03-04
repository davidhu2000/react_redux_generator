const fs = require('fs');

const logFunctions      = require('../helpers/logs.js');

console.log("Going to delete an existing file");
fs.unlink('frontend/reducers/root_reducer.js', function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("File deleted successfully!");
})

const createFilePath = (type, name) => {
  if(type[type.length -1] === 's') {
    type = type.slice(0, type.length - 1);
  }

  return `frontend/${type}s/${name}_${type}.js`;
}

const deleteFile = path => {
  fs.unlink(path, function(err) {
     if (err) {
        return console.error(err);
     }
  });
}


const remover = (type, name) => {


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


module.exports = remover;
