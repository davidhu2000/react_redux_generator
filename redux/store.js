require('shelljs/global');
const fs = require('fs');

const logFunctions  = require('../helpers/logs.js');
const storeTemplate = require('../templates/store.js');

const generateStore = () => {

  fs.exists(`frontend/store/store.js`, (exists) => {
    if(exists) {
      logFunctions.fileExistErrorLog(`store.js`);
    } else {
      mkdir('-p',`frontend/store/`);
      cd('frontend/store');
      let writeStream = fs.createWriteStream('store.js');
      writeStream.write(storeTemplate());
      writeStream.end();
      cd('../..');
      logFunctions.createFileLog(`frontend/store/store.js`);
    }
  });
};

module.exports = generateStore;
