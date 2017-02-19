# React-Redux File Generator

[![npm version](https://badge.fury.io/js/redux-file-gen.svg)](https://badge.fury.io/js/redux-file-gen)  [![Build Status](https://travis-ci.org/davidhu2000/react_redux_generator.svg?branch=master)](https://travis-ci.org/davidhu2000/react_redux_generator)

This generator helps to create the necessary files for a react-redux application. It follows the file structure below. The `frontend` folder is stored at the root directory of the application.


## New features in version 1.1
- Component generator can accept `-f` and `-nc` flags.
- When generating `root_reducer.js`, all existing reducers will be imported and added to `combineReducers`.
- `root_reducer.js` will update with import statement and key-value pairs whenever a new reducer is created.


## Installation
```
npm install -g redux-file-gen
```

In order to create the terminal command `redux`, this package needs to be installed globally.

## Usage

```
redux [command] [fileType] [options]
```

## Example file structure

```
frontend
  |- actions
    |- session_actions.js
  |- components
    |- session_form
      |- session_form.jsx
      |- session_form_container.jsx
    |- app.jsx
    |- root.jsx
  |- reducers
    |- root_reducer.js
    |- session_reducer.js
  |- store
    |- store.js
  |- util
    |- api_util.js
  |- project_name.jsx
```

## Commands

| Command       | Function                              |
|---------------|---------------------------------------|
|`generate`     | use the file generator                |
|`g`            | alias for `generate`                  |
| `--help`      | see available commands                |
| `-h`          | alias for `--help`                    |
| `--version`   | see current package version           |
| `-v`          | alias for `--version`                 |

## FileTypes

| FileType                                | Function                                                            |
|-----------------------------------------|---------------------------------------------------------------------|
| `base <projectName>`                    | generate `app.jsx`, `root.jsx`, `<projectName>.jsx`, and `store.js` |
| `action <name> [action1] [action2] ...` | generate `<name>_actions.js` with specified actions                 |
| `component <name> [options]`            | generate `<name>.jsx` and `<name>_container.jsx`                    |
| `reducer <name>`                        | generate `<name>_reducer.js`                                        |
| `util <name> [util1] [util2] ...`       | generate `<name>_util.js` with specified utils                      |

## Options

| Option                    | Function                                |
|---------------------------|-----------------------------------------|
| `-f`, `--functional`      | create functional component             |
| `-nc`, `--no-container`   | do not create component container       |

## For more details regard different types of files
- [Base](docs/base.md)
- [Action](docs/action.md)
- [Component](docs/component.md)
- [Reducer](docs/reducer.md)
- [Store](docs/store.md)
- [Utility](docs/util.md)

## Contributing

To request a feature or report an issue, click [here](https://github.com/davidhu2000/react_redux_generator/issues).
