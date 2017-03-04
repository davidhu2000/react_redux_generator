## New features in version 1.1
- [Component](docs/component.md) generator can accept `-f`/`--functional` and `-nc`/`--no-container` flags.
- When generating `root_reducer.js`, all existing [reducers](docs/reducer.md) will be imported and added to `combineReducers`.
- `root_reducer.js` will update with import statement and key-value pairs whenever a new [reducer](docs/reducer.md) is created.
