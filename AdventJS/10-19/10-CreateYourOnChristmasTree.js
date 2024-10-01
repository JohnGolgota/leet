/**
 * 
 * @param {String} ornaments 
 * @param {Number} height
 * @returns 
 */
function createChristmasTree(ornaments, height) {
    let tree = ''
    let nose = 0
    const fool = function (a) {
        let b = ''
        for (let i = 0; i < a; i++) {
            b += ' '
        }
        return b
    }
    for (let i = 1; i <= height; i++) {
        tree = tree + fool(height - i)
        for (let j = 0; j < i; j++) {
            if (j != 0) {
                tree += ' '
            }
            if (nose > ornaments.length - 1) {
                nose = 0
            }
            tree += ornaments[nose]
            if (ornaments.length !== 1) {
                nose++
            }
        }
        tree += '\n'
    }
    tree += fool(height - 1) + '|\n'
    return tree
}

console.log(createChristmasTree('xa', 4))

// soy malisimo en esto... si sigo webeando