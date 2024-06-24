import { maxArea } from './container-with-most-water'

describe('11.container-with-most-water', () => {
  test('Input: height = [1,8,6,2,5,4,8,3,7], Output: 49', () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(49)
  })

  test('Input: height = [1, 1], Output: 1', () => {
    expect(maxArea([1, 1])).toEqual(1)
  })
})
