const fs = require('fs');

const logFunctions      = require('../helpers/logs.js');

const createFilePath = (type, name) => {
  if(type[type.length -1] === 's') {
    type = type.slice(0, type.length - 1);
  }

  let extension = 'js';
  if (type === 'component') {
    extension = 'jsx'
  }

  return `frontend/${type}s/${name}_${type}.${extension}`;
}

const deleteFile = (path) => {
  fs.unlink(path, function(err) {
     if (err) {
        logFunctions.noExistFileErrorLog(path);
     } else {
       logFunctions.removedFileLog(path);
     }
  });
}


const remover = (type, name) => {
  if( /bases?/.test(type) ) {
    
  } else {
    path = createFilePath(type, name);
    deleteFile(path);
  }


}


module.exports = remover;
