require('shelljs/global');
const fs = require('fs');

const actionNameCreator = name => {
  let first;
  let second;
  let res = name.toUpperCase();
  name.split('').forEach( (char, idx) => {
    if (char === char.toUpperCase()) {
      first = name.slice(0, idx).toUpperCase();
      second = name.slice(idx).toUpperCase();
      res = `${first}_${second}`;
    }
  });
  return res;
};

const writeConstant = constName => (
`export const ${constName} = '${constName}';`
);

const writeAction = (actionName, constName) => (
`export const ${actionName} = () => ({
  type: ${constName}
});
`
);

const generateAction = (name, actions) => {

  fs.exists(`frontend/actions/${name}_actions.js`, (exists) => {
    if(exists) {
      console.log('Action already exists. I just cannot.');
      return;
    } else {

      mkdir('-p', 'frontend/actions/');
      cd('frontend/actions');

      let writeStream = fs.createWriteStream(`${name}_actions.js`);

      let constNames = actions.map( action => actionNameCreator(action));

      let data = constNames.map( constName => (
        writeConstant(constName))
      ).join('\n');

      data += '\n\n';
      data += actions.map( (action, idx) => (
        writeAction(action, constNames[idx])
      )).join('\n');

      writeStream.write(data);

      writeStream.close();
    }
  });
};

module.exports = generateAction;