const helpTemplate = () => {
  basicHelp();
  commandHelp();
  fileTypeHelp();
  optionsHelp();
};



const basicHelp = () => {
  console.log(`
  Usage: redux [command] [file] [options]

`);
};

const commandHelp = () => {
  console.log(`  Commands:

      generate                                  use the file generator
      g                                         alias for 'generate'
    `);
}

const fileTypeHelp = () => {
  console.log(`
  Files:

      base <projectName>                        generate app.jsx, root.jsx, <projectName>.jsx, store.js
      action <name> [action1] [action2] ...     generate <name>.action.js with the specified actions
      component <name> [options]                generate <name>.jsx and <name>_container.jsx
      reducer <name>                            generate <name>_reducer.js
      store                                     generate store.js
      util <name> [util1] [util2] ...           generate <name>_util.js with specified utils.
`);
}

const optionsHelp = () => {
  console.log(`
  Options:

      -f,  --functional                         create functional component
      -nc, --no-container                       do not create component container
`);
}

module.exports = {
  helpTemplate
};
