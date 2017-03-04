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

      generate,   g                              use the file generator
      remove,     r                              remove files
      --help,     -h                             show terminal command help
      --version,  -v                             show current package version
    `);
}

const fileTypeHelp = () => {
  console.log(`
  Files:

      base <projectName>                        generate app.jsx, root.jsx, <projectName>.jsx, and store.js
      action <name> [action1] [action2] ...     generate <name>_actions.js with the specified actions
      component <name> [options]                generate <name>.jsx and <name>_container.jsx
      reducer <name> [action1] [action2] ...    generate <name>_reducer.js
      store                                     generate store.js
      util <name> [util1] [util2] ...           generate <name>_util.js with specified utils.
`);
}

const optionsHelp = () => {
  console.log(`
  Options:

      --functional,   -f                         create functional component
      --no-container, -nc                        do not create component container
`);
}

module.exports = {
  helpTemplate
};
