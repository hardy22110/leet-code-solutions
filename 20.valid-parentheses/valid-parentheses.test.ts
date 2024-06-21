import { isValid } from './valid-parentheses'

describe('20. valid-parentheses', () => {
  test('Input: s = "()", Output: true', () => {
    expect(isValid('()')).toEqual(true)
  })
  test('Input: s = "()[]{}", Output: true', () => {
    expect(isValid('()[]{}')).toEqual(true)
  })
  test('Input: s = "(]", Output: false', () => {
    expect(isValid('(]')).toEqual(false)
  })
  test('Input: s = "{[]}", Output: true', () => {
    expect(isValid('{[]}')).toEqual(true)
  })
  test('Input: s = "([)]", Output: false', () => {
    expect(isValid('([)]')).toEqual(false)
  })
  test('Input: s = "]", Output: false', () => {
    expect(isValid(']')).toEqual(false)
  })
})
