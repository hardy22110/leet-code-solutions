import { longestPalindrome } from './longest-palindromic-substring'

test('Input: s = "babad", Output: "bab" or "aba"', () => {
  expect(['bab', 'aba']).toContain(longestPalindrome('babad'))
})

test('Input: s = "cbbd", Output: "bb"', () => {
  expect(longestPalindrome('cbbd')).toEqual('bb')
})

test('Input: s = "ac", Output: "a" or "c"', () => {
  expect(['c', 'a']).toContain(longestPalindrome('ac'))
})

test('Input: s = "bb", Output: "bb"', () => {
  expect(longestPalindrome('bb')).toEqual('bb')
})

test('Input: s = "ccc", Output: "ccc"', () => {
  expect(longestPalindrome('ccc')).toEqual('ccc')
})

test('Input: s = "acaa", Output: "aca"', () => {
  expect(longestPalindrome('acaa')).toEqual('aca')
})

test('Input: s = "aacabdkacaa", Output: "aca"', () => {
  expect(longestPalindrome('aacabdkacaa')).toEqual('aca')
})

test('Input: s = "a", Output: "a"', () => {
  expect(longestPalindrome('a')).toEqual('a')
})

test('Input: s = "long s", Output: "long s"', () => {
  expect(
    longestPalindrome(
      'ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc'
    )
  ).toEqual(
    'ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc'
  )
})
