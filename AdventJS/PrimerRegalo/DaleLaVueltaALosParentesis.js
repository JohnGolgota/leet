// En el taller de Santa 🎅, algunos mensajes navideños han sido escritos de manera peculiar: las letras dentro de los paréntesis deben ser leídas al revés

// Santa necesita que estos mensajes estén correctamente formateados.Tu tarea es escribir una función que tome una cadena de texto y revierta los caracteres dentro de cada par de paréntesis, eliminando los paréntesis en el mensaje final.

// Eso sí, ten en cuenta que pueden existir paréntesis anidados, por lo que debes invertir los caracteres en el orden correcto.

const a = decode('hola (odnum)')
console.log(a) // hola mundo

// const b = decode('(olleh) (dlrow)!')
// console.log(b) // hello world!

// const c = decode('sa(u(cla)atn)s')
// console.log(c) // santaclaus


// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus
// Notas:

// Las cadenas de entrada siempre estarán bien formadas con paréntesis que coinciden correctamente, no necesitas validarlos.
// En el mensaje final no deben quedar paréntesis.
// El nivel máximo de anidamiento es 2.

function decode(message) {
  // Detectar (
  // Detectar ( otra vez de forma recursiva y guardar el índice
  // Detectar ) y guardar el índice
  // Invertir el mensaje entre los dos índices
  // Quitar los paréntesis
  // Repetir hasta que no queden paréntesis
  const messageArray = message.split('')
  console.log("messageArray:", messageArray)
  const openIndex = messageArray.indexOf('(', 5)
  console.log("openIndex:", openIndex)
  // const presviousOpenIndex = messageArray.slice(openIndex + 1)
  // console.log("presviousOpenIndex:", presviousOpenIndex)
  if (openIndex === -1) {
    return message
  }
  // const innerOpenIndex = decode(presviousOpenIndex.join(''))
  // console.log("innerOpenIndex:", innerOpenIndex)


  // return presviousOpenIndex
}

// // Detectar si hay paréntesis
// const hasParenthesis = message.includes('(')
// if (hasParenthesis) {
//   // Detectar si hay paréntesis anidados
//   const hasNestedParenthesis = message.includes('((')
//   if (hasNestedParenthesis) {
//     // Invertir los paréntesis anidados
//     const nestedParenthesis = message.match(/\(\w+\)/g)
//     const nestedParenthesisReversed = nestedParenthesis.map(parenthesis => {
//       return parenthesis.split('').reverse().join('')
//     })
//     // Invertir los paréntesis que quedan
//     const messageWithoutNestedParenthesis = message.replace(/\(\w+\)/g, '')
//     const messageReversed = messageWithoutNestedParenthesis.split('').reverse().join('')
//     // Unir los paréntesis anidados invertidos con los paréntesis que quedan invertidos
//     const result = messageReversed.replace(/\(\)/g, '')
//     return result
//   } else {
//     // Invertir los paréntesis que quedan
//     const messageReversed = message.split('').reverse().join('')
//     // Unir los paréntesis anidados invertidos con los paréntesis que quedan invertidos
//     const result = messageReversed.replace(/\(\)/g, '')
//     return result
//   }
// }
// return ''