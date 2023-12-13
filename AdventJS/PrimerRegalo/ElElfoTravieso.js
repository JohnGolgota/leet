// En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabricación de regalos, añadiendo o eliminando un paso no planificado.

// Tienes la secuencia original de pasos en la fabricación original y la secuencia modificada modified que puede incluir un paso extra o faltar un paso.

// Tu tarea es escribir una función que identifique y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación.Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.
let res = 'a'
const original = 'abcd'
const modified = 'abcde'
res = findNaughtyStep(original, modified) // 'e'
console.log("res:", res)

const original2 = 'stepfor'
const modified2 = 'stepor'
res = findNaughtyStep(original2, modified2) // 'f'
console.log("res:", res)

const original3 = 'abcde'
const modified3 = 'abcde'
res = findNaughtyStep(original3, modified3) // ''
console.log("res:", res)
// A tener en cuenta:

// Siempre habrá un paso de diferencia o ninguno.
// La modificación puede ocurrir en cualquier lugar de la cadena.
// La secuencia original puede estar vacía

function findNaughtyStep(original, modified) {
  const originalArray = original.split('')
  const modifiedArray = modified.split('')
  const originalLength = originalArray.length
  const modifiedLength = modifiedArray.length
  let difference = originalLength - modifiedLength
  let naughtyStep = ''

  if (difference === 0) {
    for (let i = 0; i < originalLength; i++) {
      if (originalArray[i] !== modifiedArray[i]) {
        naughtyStep = modifiedArray[i]
        break
      }
    }
  } else if (difference === 1) {
    for (let i = 0; i < originalLength; i++) {
      if (originalArray[i] !== modifiedArray[i]) {
        naughtyStep = originalArray[i]
        break
      }
    }
  } else if (difference === -1) {
    for (let i = 0; i < modifiedLength; i++) {
      if (originalArray[i] !== modifiedArray[i]) {
        naughtyStep = modifiedArray[i]
        break
      }
    }
  }
  return naughtyStep
}

function findNaughtyStep2(original, modified) {
  if (original === modified) return ''

  const iterate = original.length > modified.length ? original : modified

  for (let i = 0; i < iterate.length; i++) {
    if (original[i] !== modified[i]) {
      return iterate[i]
    }
  }
}

res = findNaughtyStep2(original, modified)
console.log(res)

export default findNaughtyStep