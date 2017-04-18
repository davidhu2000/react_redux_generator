# Component

To generate a component run

    redux g component <name>

For example,

    redux g component user

This will generate two files

- `/frontend/components/user.jsx`

```js
// Presentational Component
import React from 'react';

class User extends React.Component {
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

export default User;
```

- `/frontend/components/index.jsx`

```js
// Container Component
import React from 'react';
import { connect } from 'react-redux';
import User from './user.jsx';

const mapStateToProps = (state, ownProps) => ({
  // your code here...
});

const mapDispatchToProps = dispatch => ({
  // your code here...
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
```

The component command supports two flags

- `-f` or `--functional`. This creates a functional component that does not extend `React.Component`.

```js
// functional component
import React from 'react';

const ListItem = (props) => (

);

export default ListItem;
```

- `-nc` or `--no-container`. This flag will tell the module not to create a container file.

For example,

    redux g component map -f-nc

or

    redux g component map --functional--no-container

This will create a functional component file without a container.
