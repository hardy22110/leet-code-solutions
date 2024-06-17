import { isPalindrome } from './palindrome-number'

test('Input: x = 121, Output: true', () => {
  expect(isPalindrome(121)).toEqual(true)
})

test('Input: x = -121, Output: false', () => {
  expect(isPalindrome(-121)).toEqual(false)
})

test('Input: x = 10, Output: false', () => {
  expect(isPalindrome(10)).toEqual(false)
})
