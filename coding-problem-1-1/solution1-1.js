module.exports.solution1a = (inputs) => {
  let product = inputs.reduce((a,b) => a * b)
  return inputs.map(input => product / input)
}

//without division
module.exports.solution1b = (inputs) => {
  return inputs.map((input, index) => {
    return inputs.reduce((a, b, idx) => {
      return idx == index ? a : a * b
    }, 1)
  })
}