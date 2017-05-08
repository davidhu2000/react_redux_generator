const toSnakeCase = words => (
  words.map( word => word.toLowerCase() ).join('_')
);

const toPascalCase = words => (
  words.map( word => word[0].toUpperCase() + word.slice(1).toLowerCase() ).join('')
);

const toCamelCase = words => (
  words.map( (word, index) => {
    if (index === 0) {
      return word.toLowerCase();
    } else {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
  }).join('')
);

const toScreamingSnakeCase = words => (
  words.map( word => word.toUpperCase() ).join('_')
);

const convert = (words, fs) => {
  let wordsArray = words.split('_');
  if (wordsArray.length === 1 && words.toUpperCase() !== words) {
    wordsArray = words.split(/(?=[A-Z])/);
  }
  return fs(wordsArray);
};

module.exports = {
  toSnakeCase,
  toPascalCase,
  toCamelCase,
  toScreamingSnakeCase,
  convert
};
