import { lengthOfLongestSubstring } from './longest-substring-without-repeating-characters'

test('Input: s = "abcabcbb", Output: 3', () => {
  expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3)
})

test('Input: s = "bbbbb", Output: 1', () => {
  expect(lengthOfLongestSubstring('bbbbb')).toEqual(1)
})

test('Input: s = "pwwkew", Output: 3', () => {
  expect(lengthOfLongestSubstring('pwwkew')).toEqual(3)
})

test('Input: s = "ab", Output: 2', () => {
  expect(lengthOfLongestSubstring('ab')).toEqual(2)
})

test('Input: s = "aab", Output: 2', () => {
  expect(lengthOfLongestSubstring('aab')).toEqual(2)
})

test('Input: s = " ", Output: 1', () => {
  expect(lengthOfLongestSubstring(' ')).toEqual(1)
})


test('Input: s = "dvdf", Output: 3', () => {
  expect(lengthOfLongestSubstring('dvdf')).toEqual(3)
})
