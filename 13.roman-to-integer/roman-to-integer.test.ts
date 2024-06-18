import { romanToInt } from './roman-to-integer'

describe.only('13.roman-to-integer', () => {
  test('Input: s = "III", Output: 3', () => {
    expect(romanToInt('III')).toEqual(3)
  })

  test('Input: s = "IV", Output: 4', () => {
    expect(romanToInt('IV')).toEqual(4)
  })

  test('Input: s = "LVIII", Output: 58', () => {
    expect(romanToInt('LVIII')).toEqual(58)
  })

  test('Input: s = "MCMXCIV", Output: 1994', () => {
    expect(romanToInt('MCMXCIV')).toEqual(1994)
  })
})
