const fs = require('fs');

const logFunctions  = require('../helpers/logs.js');
const caseConverter = require('../helpers/case_converter.js');

// function to delete a single file
const deleteFile = path => {
  fs.exists(path, exists => {
    if(exists) {
      fs.unlink(path, err => {
         if (!err) {
           logFunctions.removedFileLog(path);
         }
      });
    } else {
      logFunctions.noExistFileErrorLog(path);
    }
  });
}

const removeFileType = (type, name) => {
  if(type === 'store') {
    deleteFile('frontend/store/store.js');
    return;
  }
  if(type[type.length - 1] === 's') {
    type = type.slice(0, type.length - 1);
  }

  let nameSC = caseConverter.convert(name, caseConverter.toSnakeCase);

  if (type === 'component') {
    let componentPath = `frontend/components/${nameSC}/${nameSC}.jsx`;
    let containerPath = `frontend/components/${nameSC}/index.jsx`;
    deleteFile(containerPath);
    deleteFile(componentPath);
  } else {
    let fileEnding = type;
    if (type === 'action') {
      fileEnding += 's';
    }
    let folder = type;

    if (['action', 'component', 'reducer'].includes(type)) {
      folder += 's';
    }

    let path = `frontend/${folder}/${nameSC}_${fileEnding}.js`;
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
    removeFileType(type, name);
  }
}

module.exports = remover;
