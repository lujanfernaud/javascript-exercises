const words = /(\w*)\b/g
const camelCase = /([a-z]+)([A-Za-z]+)/

function snakeCase(phrase) {
  const parsedPhrase = parse(phrase)

  if (containsCamelCase(parsedPhrase)) {
    return removeCamelCase(parsedPhrase).join('_')
  } else {
    return parsedPhrase.join('_')
  }
}

function parse(phrase) {
  const wordsArray = phrase.match(words).filter(String)

  return wordsArray.map(word => {
    if (word.match(/^[A-Z]/)) {
      return word.toLowerCase()
    } else {
      return word
    }
  })
}

function containsCamelCase(phrase) {
  return phrase.join('').match(/[A-Z]/)
}

function removeCamelCase(phrase) {
  return phrase.map(word =>
    word.match(camelCase).filter(String).slice(1).join('_').toLowerCase()
  )
}

module.exports = snakeCase
