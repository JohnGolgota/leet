// drawGift(4, '+')
/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

// drawGift(5, '*')
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

drawGift(1, '^')
/*
#
*/
function drawGift(size, symbol) {
  if (size === 1) return '#\n'
  let lines: String[] = []

  lines[0] = '#'.repeat(size).padStart(size * 2 - 1, ' ')

  lines[size * 2 - 2] = '#'.repeat(size)

  lines[size - 1] = `${'#'.repeat(size)}${symbol.repeat(size - 2)}#`

  for (let i = 1; i < size - 1; i++) {
    let dr = `#${symbol.repeat(size - 2)}#${symbol.repeat(i - 1)}#`
    lines[i] = dr.padStart(size * 2 - 1, ' ')
    lines[size * 2 - i - 2] = dr
  }

  let res = lines.join('\n').concat('\n')
  console.log("res:", res)
  return res
}