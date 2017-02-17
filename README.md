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

**Table of Content:**
- [Base](#base)
- [Action](#action)
- [Component](#component)
- [Reducer](#reducer)
- [Store](#store)
- [Utility](#util)


## Command helps
To see all the available commands from the terminal, run
```
redux help
```
or
```
redux --help
```
or
```
redux -h
```


## Contributing

To request a feature or report an issue, click [here](https://github.com/davidhu2000/react_redux_generator/issues).
