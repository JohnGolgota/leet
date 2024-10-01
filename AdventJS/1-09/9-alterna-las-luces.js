// Están encendiendo las luces de Navidad 🎄 en la ciudad y, como cada año, ¡hay que arreglarlas!

// Las luces son de dos colores: 🔴 y 🟢 . Para que el efecto sea el adecuado, siempre deben estar alternadas. Es decir, si la primera luz es roja, la segunda debe ser verde, la tercera roja, la cuarta verde, etc.

// Nos han pedido que escribamos una función adjustLights que, dado un array de strings con el color de cada luz (representados con los emojis 🔴 para el rojo y 🟢 para el verde), devuelva el número mínimo de luces que hay que cambiar para que estén los colores alternos.

function adjustLights(lights) {
  // Code here
  return 0
}

// Test
console.log(
  adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])
  // -> 1 (cambias la cuarta luz a 🔴)
  , 1
)

console.log(
  adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢'])
  // -> 1 (cambia la primera luz a verde)
  , 1
)

console.log(
  adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])
  // -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)
  , 2
)

console.log(
  adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])
  // -> 0 (ya están alternadas)
  , 0
)

console.log(
  adjustLights(['🔴', '🔴', '🔴'])
  // -> 1 (cambias la segunda luz a 🟢)
  , 1
)
