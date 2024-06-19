import { removeElement } from './remove-element'

describe('13.roman-to-integer', () => {
  test('Input: nums = [3,2,2,3], val = 3, Output: 2, nums = [2,2,_,_]', () => {
    let temp = [3, 2, 2, 3]
    expect(removeElement(temp, 3)).toEqual(2)
    expect(temp).toEqual([2, 2])
  })

  test('Input: nums = [0,1,2,2,3,0,4,2], val = 2, Output: 5, nums = [0,1,4,0,3,_,_,_]', () => {
    let temp = [0, 1, 2, 2, 3, 0, 4, 2]
    expect(removeElement(temp, 2)).toEqual(5)
    expect(temp).toEqual([0, 1, 3, 0, 4])
  })
})
