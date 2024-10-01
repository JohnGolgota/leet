console.log("El CyberTruck de Santa")

const road = 'S..|...|..'
const time = 10
const reindeer = cyberReindeer(road, time)
console.log("🚀 ~ reindeer:", reindeer)
function cyberReindeer(road:string, time:number) {
    const snap = [road]
    // console.log("🚀 ~ snap:", snap)
    let lastChar = '.'
    // console.log("🚀 ~ lastChar:", lastChar)
    for (let i = 0; i < time; i++){
        if (i === 5) road = road.replace('|', '*')
        // Ahora no sirve pero puto error de sintaxis
        // console.log("🚀 ~ road:", road)

        const matches = road.match(/S[\*\.]/g)
        // console.log("🚀 ~ matches:", matches)

        if (matches) {
            road = road.replace(matches[0], lastChar + 'S')
            // console.log("🚀 ~ road:", road)
            lastChar = matches[0][1]
            // console.log("🚀 ~ lastChar:", lastChar)
        }

        snap.push(road)
    }
    return snap
}