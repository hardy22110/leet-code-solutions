import { plusOne } from './plus-one'

describe('66.plus-one', () => {
  test(`Input: digits = [1,2,3], Output: [1,2,4]`, () => {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4])
  })

  test(`Input: digits = [4,3,2,1], Output: [4,3,2,2]`, () => {
    expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2])
  })

  test(`Input: digits = [9], Output: [1,0]`, () => {
    expect(plusOne([9])).toEqual([1, 0])
  })
})
