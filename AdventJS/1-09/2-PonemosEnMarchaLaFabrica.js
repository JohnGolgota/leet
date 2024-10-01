// En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar y un conjunto limitado de materiales.

// Los regalos son cadenas de texto y los materiales son caracteres.Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar.

// Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

// manufacture(gifts, materials) // ["tren", "oso"]
// // 'tren' SÍ porque sus letras están en 'tronesa'
// // 'oso' SÍ porque sus letras están en 'tronesa'
// // 'pelota' NO porque sus letras NO están en 'tronesa'

// const gifts = ['juego', 'puzzle']
// const materials = 'jlepuz'

// manufacture(gifts, materials) // ["puzzle"]

// const gifts = ['libro', 'ps5']
// const materials = 'psli'

// manufacture(gifts, materials) // []

function manufacture(gifts, materials) {
  const giftsArray = gifts.map(gift => gift.split(''))
  const materialsArray = materials.split('')

  const result = giftsArray.map(gift => {
    const giftCopy = [...gift]
    const giftMaterials = giftCopy.filter(letter => {
      const index = materialsArray.indexOf(letter)
      if (index !== -1) {
        return true
      }
      return false
    })
    if (giftMaterials.length === gift.length) {
      return gift.join('')
    }
  })

  return result.filter(gift => gift)
}

console.log(manufacture(gifts, materials))

function manufacture2(gifts, materials) {
  return gifts.filter(gift => {
    return gift.split('').every(letter => {
      return materials.includes(letter)
    })
  })
}

export default manufacture