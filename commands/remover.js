const fs = require('fs');

const logFunctions      = require('../helpers/logs.js');

// function to delete a single file
const deleteFile = (path) => {
  fs.unlink(path, function(err) {
     if (err) {
        logFunctions.noExistFileErrorLog(path);
     } else {
       logFunctions.removedFileLog(path);
     }
  });
}

const removeFile = (type, name) => {
  if(type[type.length - 1] === 's') {
    type = type.slice(0, type.length - 1);
  }

  if (type === 'component') {
    let componentPath = `frontend/components/${name}/${name}.jsx`;
    let containerPath = `frontend/components/${name}/${name}_container.jsx`;
    deleteFile(containerPath);
    deleteFile(componentPath);
  } else {
    let fileEnding = type;
    if (type === 'action') {
      fileEnding += 's';
    }
    let path = `frontend/${type}s/${name}_${fileEnding}.js`;
    deleteFile(path);
  }
}

const remover = (type, name) => {
  if( /bases?/.test(type) ) {
    deleteFile(`frontend/${name}.jsx`);
    deleteFile(`frontend/components/app.jsx`);
    deleteFile(`frontend/components/root.jsx`);
    deleteFile(`frontend/store/store.js`);
  } else {
    removeFile(type, name);
  }
}

module.exports = remover;
