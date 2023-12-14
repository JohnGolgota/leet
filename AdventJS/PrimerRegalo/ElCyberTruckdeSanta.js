const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)
console.log("result:", result)
function cyberReindeer(road, time) {
  const snap = [road]
  let lastChar = '.'
  for (let i = 1; i < time; i++) {
    if (i === 5) road = road.replaceAll('|', '*')
    const matches = road.match(/S[\*\.]/g)
    if (matches) {
      road = road.replace(matches[0], lastChar + 'S')
      lastChar = matches[0][1]
    }
    snap.push(road)
  }
  return snap
}
// Al final, el resultado debería ser: