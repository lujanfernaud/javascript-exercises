function palindromes(string) {
  string = string.replace(/[^a-zA-Z]/g, '').toLowerCase()

  const reversedString = [...string].reverse().join('')

  return reversedString === string
}

module.exports = palindromes
