const movements = '>>*<'
const result = maxDistance(movements)
result === 2 ? console.log('Test passed') : console.log('Test failed')
console.log(result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
result2 === 2 ? console.log('Test passed') : console.log('Test failed')
console.log(result2) // -> 2

// const movements3 = '>***>'
// const result3 = maxDistance(movements3)
// result3 === 5 ? console.log('Test passed') : console.log('Test failed')
// console.log(result3) // -> 5

// const movements4 = '****<>>>><*****'
// const result4 = maxDistance(movements4)
// result4 === 11 ? console.log('Test passed') : console.log('Test failed')
// console.log(result4) // -> 4
function maxDistance(movements: string) {
  let disatace = 0
  let derecha = 0
  let izquierda = 0
  let dual = 0
  for (let i = 0; i < movements.length; i++) {
    // Contar cuantos > y < hay
    if (movements[i] === '>') {
      derecha++
    }
    if (movements[i] === '<') {
      izquierda++
    }
    if (movements[i] === '*') {
      dual++
    }
  }
  disatace = derecha > izquierda ? dual + izquierda - derecha : dual + derecha - izquierda
  let result = Math.abs(disatace)
  return result
}