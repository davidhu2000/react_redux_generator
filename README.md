# React-Redux File Generator

[![npm version](https://badge.fury.io/js/redux-file-gen.svg)][npm_url]
[![downloads](https://img.shields.io/npm/dt/redux-file-gen.svg)][npm_url]
[![license](https://img.shields.io/npm/l/redux-file-gen.svg)][npm_url]
[![Build Status](https://travis-ci.org/davidhu2000/react_redux_generator.svg?branch=master)](https://travis-ci.org/davidhu2000/react_redux_generator)
[![CircleCI](https://circleci.com/gh/davidhu2000/react_redux_generator.svg?style=shield)](https://circleci.com/gh/davidhu2000/react_redux_generator)

[![Code Triagers Badge](https://www.codetriage.com/davidhu2000/react_redux_generator/badges/users.svg)](https://www.codetriage.com/davidhu2000/react_redux_generator)
[![dependencies Status](https://david-dm.org/davidhu2000/react_redux_generator/status.svg)](https://david-dm.org/davidhu2000/react_redux_generator)
[![devDependencies Status](https://david-dm.org/davidhu2000/react_redux_generator/dev-status.svg)](https://david-dm.org/davidhu2000/react_redux_generator?type=dev)

[npm_url]: https://www.npmjs.org/package/redux-file-gen

This generator helps to create the necessary files for a react-redux application. It follows the file structure below. The `frontend` folder is stored at the root directory of the application.

<a target='_blank' rel='nofollow' href='https://app.codesponsor.io/link/YsWPXzR7ZbjnxKCaLbuyR61q/davidhu2000/react_redux_generator'>
  <img alt='Sponsor' width='888' height='68' src='https://app.codesponsor.io/embed/YsWPXzR7ZbjnxKCaLbuyR61q/davidhu2000/react_redux_generator.svg' />
</a>

## Installation

    npm install -g redux-file-gen

In order to create the terminal command `redux`, this package needs to be installed globally.

## Usage

    redux [command] [fileType] [options]

## File structure

```file
frontend
  |- actions
    |- <actionName>_actions.js
  |- components
    |- <componentName>
      |- <componentName>.jsx
      |- index.jsx
    |- app.jsx
    |- root.jsx
  |- reducers
    |- root_reducer.js
    |- <reducerName>_reducer.js
  |- store
    |- store.js
  |- util
    |- <utilName>_util.js
  |- <projectName>.jsx
```

## Commands

| Command     | Alias | Function                    |
|-------------|-------|-----------------------------|
| `generate`  | `g`   | use the file generator      |
| `remove`    | `r`   | remove the generated files  |
| `--help`    | `-h`  | see available commands      |
| `--version` | `-v`  | see current package version |

## FileTypes

| FileType                                 | Function                                                            |
|------------------------------------------|---------------------------------------------------------------------|
| `base <projectName>`                     | generate `app.jsx`, `root.jsx`, `<projectName>.jsx`, and `store.js` |
| `action <name> [action1] [action2] ...`  | generate `<name>_actions.js` with specified actions                 |
| `component <name> [options]`             | generate `<name>.jsx` and `<name>_container.jsx`                    |
| `reducer <name> [action1] [action2] ...` | generate `<name>_reducer.js`                                        |
| `util <name> [util1] [util2] ...`        | generate `<name>_util.js` with specified utils                      |

## Options

| Option           | Alias | Function                          |
|------------------|-------|-----------------------------------|
| `--functional`   | `-f`  | create functional component       |
| `--no-container` | `-nc` | do not create component container |

## For more details regard different types of files

- [Base](docs/base.md)
- [Action](docs/action.md)
- [Component](docs/component.md)
- [Reducer](docs/reducer.md)
- [Store](docs/store.md)
- [Utility](docs/util.md)

## Version notes

To see what features are added during each update, click [here](docs/update_notes.md)

## Contributing

To request a feature or report an issue, click [here](https://github.com/davidhu2000/react_redux_generator/issues).
