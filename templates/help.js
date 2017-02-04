const helpTemplate = () => {
  basicHelp();
  actionHelp();
  componentHelp();
  reducerHelp();
  storeHelp();
  utilHelp();
};

const basicHelp = () => {
  console.log(`redux - main command
g can be used in place of generate
`);
};

const baseHelp = () => {
  console.log(`To generate the base files:
    redux generate base [project_name]
For example:
    redux generate base pokedex
`);
};

const actionHelp = () => {
  console.log(`To generate an action file:
    redux generate action [name] [action1] [action2] ...
For example:
    redux generate action session receiveUser receiveError
`);
};


const componentHelp = () => {
  console.log(`To generate a component and its container
    redux generate component [name]
For example:
    redux generate component user

Acceptable flags:
    -f or --functional
    -nc or --no-container
`);
};

const reducerHelp = () => {
  console.log(`To generate a reducer file:
    redux generate reducer [name]
For example:
    redux generate reducer session
`);
};

const storeHelp = () => {
  console.log(`To generate a store file:
    redux generate store
`);
};

const utilHelp = () => {
  console.log(`To generate an utility file:
    redux generate util [name] [action1] [action2] ...
For example:
    redux generate util api login logout signup
`);
};

module.exports = {
  helpTemplate,
  baseHelp,
  actionHelp,
  componentHelp,
  reducerHelp,
  storeHelp,
  utilHelp
};
