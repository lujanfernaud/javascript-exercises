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
  return new CaesarCipher(string, shiftFactor).call()
}

class CaesarCipher {
  constructor(string, shiftFactor) {
    this.string = string
    this.shiftFactor = shiftFactor
  }

  call() {
    const newCharacters = this.getNewCharacters()

    return newCharacters.join('')
  }

  getNewCharacters() {
    return map.call(this.string, character => {
      const letters = this.selectLettersFor(character)

      if (letters) {
        return this.getNewLetter(letters, character)
      } else {
        return character
      }
    })
  }

  selectLettersFor(character) {
    if (upperCaseLetters.includes(character)) {
      return upperCaseLetters
    } else if (lowerCaseLetters.includes(character)) {
      return lowerCaseLetters
    } else {
      return null
    }
  }

  getNewLetter(letters, character) {
    const index = letters.indexOf(character)

    rotate(letters, this.shiftFactor)

    return letters[index]
  }
}

module.exports = caesar
