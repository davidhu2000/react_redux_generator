const functional = name => (
`import React from 'react';

const ${name} = (props) => (

);

export default ${name};
`
);

const presentational = name => (
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
    );
  }
}

export default ${name};
`
);

const container = (nameUCC, nameSC) => (
`import React from 'react';
import { connect } from 'react-redux';
import ${nameUCC} from './${nameSC}.jsx';

const mapStateToProps = (state, ownProps) => ({
  // your code here...
});

const mapDispatchToProps = dispatch => ({
  // your code here...
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(${nameUCC});
`
);

module.exports = {
  functional,
  presentational,
  container
};
