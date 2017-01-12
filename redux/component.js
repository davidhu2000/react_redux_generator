require('shelljs/global');
const fs = require('fs');

const caseConverter = require('../helpers/case_converter.js');
const logFunctions = require('../helpers/logs.js');

const presentationComponent = (name) => (
`import React from 'react';

class ${name} extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        // your code here...
      </div>
    )
  }
}

export default ${name};
`
);

const containerComponent = name => (
`import React from 'react';
import { connect } from 'react-redux';
import ${name} from './${caseConverter.convert(name, caseConverter.toSnakeCase)}.jsx';

const mapStateToProps = (state, ownProps) => ({
  // your code here...
});

const mapDispatchToProps = dispatch => ({
  // your code here...
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(${name});
`
);

const generateComponent = (name, actions) => {
  let nameSC = caseConverter.convert(name, caseConverter.toSnakeCase);
  let nameUCC = caseConverter.convert(name, caseConverter.toUpperCamelCase);

  fs.exists(`frontend/components/${nameSC}/${nameSC}.jsx`, (exists) => {
    if(exists) {
      logFunctions.fileExistErrorLog();
    } else {

      mkdir('-p', `frontend/components/${nameSC}`);
      cd(`frontend/components/${nameSC}`);

      let writeStreamPresentation = fs.createWriteStream(`${nameSC}.jsx`);
      let presentationData = presentationComponent(nameUCC);
      writeStreamPresentation.write(presentationData);
      writeStreamPresentation.close();

      logFunctions.createFileLog(`frontend/components/${nameSC}/${nameSC}.jsx`);

      let writeStreamContainer = fs.createWriteStream(`${nameSC}_container.jsx`);
      let containerData = containerComponent(nameUCC);
      writeStreamContainer.write(containerData);
      writeStreamContainer.close();

      logFunctions.createFileLog(`frontend/components/${nameSC}/${nameSC}_container.jsx`);
    }
  });
};

module.exports = generateComponent;
