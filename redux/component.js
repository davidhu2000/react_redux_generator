require('shelljs/global');
const fs = require('fs');

const caseConverter = require('../helpers/case_converter.js');

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
import ${name} from './${caseConverter.toSnakeCase(name)}.jsx';

const mapStateToProps = props => ({
  // your code here...
});

const mapDispatchToProps = dispatch => ({
  // your code here...
});

export connect(
  mapStateToProps,
  mapDispatchToProps
)(${name});
`
);

const generateComponent = (name, actions) => {

  fs.exists(`frontend/components/${caseConverter.toSnakeCase(name)}/${caseConverter.toSnakeCase(name)}.jsx`, (exists) => {
    if(exists) {
      console.log('Action already exists. Sorry, I cannot do it.');
      return;
    } else {

      mkdir('-p', `frontend/components/${caseConverter.toSnakeCase(name)}`);
      cd(`frontend/components/${caseConverter.toSnakeCase(name)}`);

      let writeStreamPresentation = fs.createWriteStream(`${caseConverter.toSnakeCase(name)}.jsx`);
      let presentationData = presentationComponent(name);
      writeStreamPresentation.write(presentationData);
      writeStreamPresentation.close();

      let writeStreamContainer = fs.createWriteStream(`${caseConverter.toSnakeCase(name)}_container.jsx`);
      let containerData = containerComponent(name);
      writeStreamContainer.write(containerData);
      writeStreamContainer.close();
    }
  });
};

module.exports = generateComponent;