// En el taller de Santa 🎅, algunos mensajes navideños han sido escritos de manera peculiar: las letras dentro de los paréntesis deben ser leídas al revés

// Santa necesita que estos mensajes estén correctamente formateados.Tu tarea es escribir una función que tome una cadena de texto y revierta los caracteres dentro de cada par de paréntesis, eliminando los paréntesis en el mensaje final.

// Eso sí, ten en cuenta que pueden existir paréntesis anidados, por lo que debes invertir los caracteres en el orden correcto.

// const a = decode('hola (odnum)')
// console.log(a) // hola mundo

// const b = decode('(olleh) (dlrow)!')
// console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

const d = decode('s(u(l3 al)c(a)tn)(as)')
console.log(d) // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus
// Notas:

// Las cadenas de entrada siempre estarán bien formadas con paréntesis que coinciden correctamente, no necesitas validarlos.
// En el mensaje final no deben quedar paréntesis.
// El nivel máximo de anidamiento es 2.

function decode(message: string) {
  const match = message.match(/\(([^()]+)\)/g)
  if (!match) {
    return message
  }
  match.map(m => {
    const sanitized = m.split('').reverse().join('').replace(/\(|\)/g, '')
    message = message.replace(m, sanitized)
  })
  message = decode(message)
  return message
}
// function decode(message) {
//   // Detectar (
//   // Detectar ( otra vez de forma recursiva y guardar el índice
//   // Detectar ) y guardar el índice
//   // Invertir el mensaje entre los dos índices
//   // Quitar los paréntesis
//   // Repetir hasta que no queden paréntesis
//   const messageArray = message.split('')
//   console.log("messageArray:", messageArray)
//   const openIndex = messageArray.indexOf('(', 5)
//   console.log("openIndex:", openIndex)
//   // const presviousOpenIndex = messageArray.slice(openIndex + 1)
//   // console.log("presviousOpenIndex:", presviousOpenIndex)
//   if (openIndex === -1) {
//     return message
//   }
//   // const innerOpenIndex = decode(presviousOpenIndex.join(''))
//   // console.log("innerOpenIndex:", innerOpenIndex)


//   // return presviousOpenIndex
// }

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

// function decode(message: string) {
//   const messageArray = message.split('')
//   console.log("message:", message)
//   console.log("messageArray:", messageArray)

//   const openParenthesis = messageArray.indexOf('(')
//   console.log("message:", message)
//   console.log("openParenthesis:", openParenthesis)

//   if (openParenthesis === -1) {
//     return message
//   }

//   const messageInParenthesis = messageArray.slice(openParenthesis + 1)
//   console.log("message:", message)
//   console.log("messageInParenthesis:", messageInParenthesis)

//   const recursiveResult = decode(messageInParenthesis.join(''))
//   console.log("message:", message)
//   console.log("recursiveResult:", recursiveResult)

//   const closeParenthesis = recursiveResult.split('')
//   console.log("message:", message)
//   console.log("closeParenthesis:", closeParenthesis)

//   const closeParenthesisIndex = closeParenthesis.reverse()
//   console.log("message:", message)
//   console.log("closeParenthesisIndex:", closeParenthesisIndex)

//   let result = message.join
//   return result
// }