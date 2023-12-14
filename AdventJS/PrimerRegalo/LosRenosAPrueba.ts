const movements = '>>*<'
const result = maxDistance(movements)
result === 2 ? console.log('Test passed') : console.log('Test failed')
console.log(result) // -> 2

// const movements2 = '<<<>'
// const result2 = maxDistance(movements2)
// result2 === 2 ? console.log('Test passed') : console.log('Test failed')
// console.log(result2) // -> 2

// const movements3 = '>***>'
// const result3 = maxDistance(movements3)
// result3 === 5 ? console.log('Test passed') : console.log('Test failed')
// console.log(result3) // -> 5

// const movements4 = '****<>>>><*****'
// const result4 = maxDistance(movements4)
// result4 === 12 ? console.log('Test passed') : console.log('Test failed')
// console.log(result4) // -> 4

// const movements5 = '*<*'
// const result5 = maxDistance(movements5)
// result5 === 1 ? console.log('Test passed') : console.log('Test failed')
// console.log(result5) // -> 1

const movements6 = '*>><<*'
const result6 = maxDistance(movements6)
result6 === 2 ? console.log('Test passed') : console.log('Test failed')
console.log(result6) // -> 2

function maxDistance(movements: string) {
  let disatace = 0
  let derecha = 0
  let izquierda = 0
  for (let i = 0; i < movements.length; i++) {
    // Contar cuantos > y < hay
    console.log(movements[i])
    if (movements[i] === '>') {
      derecha++
      disatace++
    }
    if (movements[i] === '<') {
      izquierda++
      disatace--
    }
    if (movements[i] === '*') {
      derecha >= izquierda ? disatace++ : disatace--
    }
  }
  const maxDistance = Math.abs(disatace)
  return maxDistance
}