import { longestCommonPrefix } from './longest-common-prefix'

describe('14.longest-common-prefix', () => {
  test('Input: strs = ["flower","flow","flight"], Output: "fl"', () => {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toEqual('fl')
  })

  test('Input: strs = ["dog","racecar","car"], Output: ""', () => {
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toEqual('')
  })

  test('Input: strs = ["cir","car"], Output: "c"', () => {
    expect(longestCommonPrefix(['cir', 'car'])).toEqual('c')
  })

  test('Input: strs = ["a"], Output: "a"', () => {
    expect(longestCommonPrefix(['a'])).toEqual('a')
  })

  test('Input: strs = ["reflower","flow","flight"], Output: ""', () => {
    expect(longestCommonPrefix(['reflower', 'flow', 'flight'])).toEqual('')
  })

  test('Input: strs = ["aa","ab"], Output: "a"', () => {
    expect(longestCommonPrefix(['aa', 'ab'])).toEqual('a')
  })
})
