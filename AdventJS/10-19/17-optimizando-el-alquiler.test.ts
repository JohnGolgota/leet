import { optimizeIntervals } from './17-optimizando-el-alquiler'
import { describe, expect, it } from 'vitest'

describe('optimizeIntervals', () => {
  it('should return an empty array', () => {
    expect(optimizeIntervals([])).toEqual([])
  })

  const inputAndExpected = [
    [[
      [5, 8],
      [2, 7],
      [3, 4]], [[2, 8]]],
    [[
      [1, 3],
      [8, 10],
      [2, 6]
    ], [[1, 6], [8, 10]]],
    [[
      [3, 4],
      [1, 2],
      [5, 6]
    ], [[1, 2], [3, 4], [5, 6]]]
  ]

  it.each(inputAndExpected)('should return %p for %p', (expected, input) => {
    expect(optimizeIntervals(input)).toEqual(expected)
  })
})