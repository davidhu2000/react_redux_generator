const caseConverter = {
  toSnakeCase: words => (
    words.map( word => word.toLowerCase() ).join('_')
  ),

  toUpperCamelCase: words => (
    words.map( word => word[0].toUpperCase() + word.slice(1) ).join('')
  ),

  toLowerCamelCase: words => (
    words.map( (word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      } else {
        return word[0].toUpperCase() + word.slice(1);
      }
    }).join('')
  ),

  toScreamingSnakeCase: words => (
    words.map( word => word.toUpperCase() ).join('_')
  ),

  convert: (words, fs) => {
    let wordsArray = words.split('_');
    if (wordsArray.length === 1 && words.toUpperCase() !== words) {
      wordsArray = words.split(/(?=[A-Z])/);
    }
    return fs(wordsArray);
  }
};



module.exports = caseConverter;
