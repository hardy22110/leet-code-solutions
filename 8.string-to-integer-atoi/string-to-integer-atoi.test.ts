import { myAtoi } from './string-to-integer-atoi'

describe('8.string-to-integer-atoi', () => {
    
  test('Input: s = "42", Output: 42', () => {
    expect(myAtoi('42')).toEqual(42)
  })

  test('Input: s = " -042", Output: -42', () => {
    expect(myAtoi(' -042')).toEqual(-42)
  })

  test('Input: s = "1337c0d3", Output: 1337', () => {
    expect(myAtoi('1337c0d3')).toEqual(1337)
  })

  test('Input: s = "0-1", Output: 0', () => {
    expect(myAtoi('0-1')).toEqual(0)
  })
  
  test('Input: s = "words and 987", Output: 0', () => {
    expect(myAtoi('words and 987')).toEqual(0)
  })

  test('Input: s = "+1", Output: 1', () => {
    expect(myAtoi('+1')).toEqual(1)
  })  

  test('Input: s = "-+12", Output: 0', () => {
    expect(myAtoi('-+12')).toEqual(0)
  })
  
  test('Input: s = "-91283472332", Output: -2147483648', () => {
    expect(myAtoi('-91283472332')).toEqual(-2147483648)
  })
  
  
})
