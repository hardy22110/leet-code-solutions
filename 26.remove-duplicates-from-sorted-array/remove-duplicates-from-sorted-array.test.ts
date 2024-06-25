import { removeDuplicates } from './remove-duplicates-from-sorted-array'

describe('26.remove-duplicates-from-sorted-array', () => {
  test('Input: nums = [1,1,2], Output: 2, nums = [1,2,_]', () => {
    let temp = [1, 1, 2]
    expect(removeDuplicates(temp)).toEqual(2)
    expect(temp.splice(0, 2)).toEqual([1, 2])
  })

  test('Input: nums = [0,0,1,1,1,2,2,3,3,4], Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]', () => {
    let temp = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
    expect(removeDuplicates(temp)).toEqual(5)
    expect(temp.splice(0, 5)).toEqual([0, 1, 2, 3, 4])
  })
})
