function fibonacci(member) {
  if (member < 0) { return 'OOPS' }

  const numbers = getNumbers(member)

  return numbers[member - 1]
}

function getNumbers(member) {
  let index = 0
  let number = 0
  let numbers = [0]

  while (index < member) {
    if (numbers[index] === 0) {
      number = 1
      numbers = [number]
    } else if (index === 1) {
      numbers.push(number)
    } else {
      number = numbers[index - 2] + number
      numbers.push(number)
    }

    index++
  }

  return numbers
}

module.exports = fibonacci
