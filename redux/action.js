require('shelljs/global');
const fs = require('fs');

const generateAction = (name, actions) => {

  fs.exists(`frontend/actions/${name}_actions.js`, (exists) => {
    if(exists) {
      console.log('Action already exists. I just cannot.');
      return;
    } else {      
      mkdir('-p', '/frontend/actions/');
      cd('frontend/actions');

      let filename = `${name}_actions.js`;
      var writeStream = fs.createWriteStream(filename);
    }
  });


};

module.exports = generateAction;
