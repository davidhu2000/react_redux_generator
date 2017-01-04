
const caseConverter = {
  toSnakeCase: words => (
    words.split(/(?=[A-Z])/).map( word => word.toLowerCase() ).join('_')
  ),
  toUpperCamelCase: words => (
    words.split(/(?=[A-Z])/).map( word => word.capitalize() ).join('')
  )
};

module.exports = caseConverter;
