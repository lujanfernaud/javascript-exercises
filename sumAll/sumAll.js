// Generate range of numbers.
function * range(start, end, step = 1) {
  while (start <= end) {
    yield start
    start += step
  }
}

function sumAll(start, end) {
  if (start < 0 || nonNumberParameters(start, end)) { return 'ERROR' }

  const numbers = buildNumbersArray(start, end)
  const reducer = (accumulator, currentValue) => accumulator + currentValue

  return numbers.reduce(reducer)
}

function nonNumberParameters(start, end) {
  return typeof start !== 'number' || typeof end !== 'number'
}

function buildNumbersArray(start, end) {
  if (start < end) {
    return Array.from(range(start, end))
  } else {
    return Array.from(range(end, start))
  }
}

module.exports = sumAll
