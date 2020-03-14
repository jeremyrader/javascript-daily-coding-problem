module.exports.solution2 = (inputs) => {
  lowIndex = 0
  highIndex = inputs.length - 1

  let sorted = [...inputs].sort((a,b) => a - b)

  inputs.some((input, index) => {

    let condition = input !== sorted[index]
    if (!condition) lowIndex++
    
    return condition
  })
  
  let reversed = inputs.reverse()
  let reversedSorted = [...reversed].sort((a,b) => b - a)

  reversed.some((input, index) => {
    let condition = input !== reversedSorted[index]
 
    if (!condition) highIndex--
    return condition
  })

  return [lowIndex, highIndex]
}