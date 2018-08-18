// Generate range of numbers.
function * range(start, end, step = 1) {
  while (start <= end) {
    yield start
    start += step
  }
}

// Rotate array.
function rotate(array, n) {
  while (n > array.length) { n = n - array.length }
  while (n < 0) { n = array.length - (n * -1) }

  array.push.apply(array, array.splice(0, n))

  return array
}

const map = Array.prototype.map

const upperCaseCodes = Array.from(range(65, 90))
const lowerCaseCodes = Array.from(range(97, 122))

const upperCaseLetters = upperCaseCodes.map(code => String.fromCodePoint(code))
const lowerCaseLetters = lowerCaseCodes.map(code => String.fromCodePoint(code))

function caesar(string, shiftFactor) {
  const newCharacters = getNewCharacters(string, shiftFactor)

  return newCharacters.join('')
}

function getNewCharacters(string, shiftFactor) {
  return map.call(string, character => {
    if (upperCaseLetters.includes(character)) {
      return getNewCharacter(upperCaseLetters, character, shiftFactor)
    } else if (lowerCaseLetters.includes(character)) {
      return getNewCharacter(lowerCaseLetters, character, shiftFactor)
    } else {
      return character
    }
  })
}

function getNewCharacter(letters, characterCode, shiftFactor) {
  const index = letters.indexOf(characterCode)

  rotate(letters, shiftFactor)

  return letters[index]
}

module.exports = caesar
