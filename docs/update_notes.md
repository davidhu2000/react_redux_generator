## New features in version 1.2
- [Action](action.md) generator detects keyword `receive` in action name and automatically add the argument name and key-value pair to the function.
- [Util](util.md) generator detects keyword `fetch` in util name and automatically add a basic `ajax` request in the body of the function.
- Added command `remove` or `r` to remove generated files.
- [Reducer](reducer.md) now accepts actions and will automatically add the import and case statements.

## New features in version 1.1
- [Component](component.md) generator can accept `-f`/`--functional` and `-nc`/`--no-container` flags.
- When generating `root_reducer.js`, all existing [reducers](reducer.md) will be imported and added to `combineReducers`.
- `root_reducer.js` will update with import statement and key-value pairs whenever a new [reducer](reducer.md) is created.
