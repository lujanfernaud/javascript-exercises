const vowels = /[aeiou]/

function translate(phrase) {
  return phrase.split(' ').map(word => translateWord(word)).join(' ')
}

function translateWord(word) {
  if (startsWithVowel(word)) {
    return word + 'ay'
  } else {
    return wordWithMovedConsonants(word) + 'ay'
  }
}

function startsWithVowel(word) {
  return word[0].match(vowels)
}

function wordWithMovedConsonants(word) {
  let firstVowelIndex = word.search(vowels)

  if (word[firstVowelIndex] === 'u') { firstVowelIndex += 1 }

  return word.slice(firstVowelIndex) + word.slice(0, firstVowelIndex)
}

module.exports = { translate }
