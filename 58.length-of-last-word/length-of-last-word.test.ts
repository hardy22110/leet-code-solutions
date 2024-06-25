import { lengthOfLastWord } from './length-of-last-word'

describe('58.length-of-last-word', () => {
  test(`Input: s = "Hello World", Output: 5`, () => {
    expect(lengthOfLastWord('Hello World')).toEqual(5)
  })

  test(`Input: s = "   fly me   to   the moon  ", Output: 4`, () => {
    expect(lengthOfLastWord('   fly me   to   the moon  ')).toEqual(4)
  })

  test(`Input: s = "luffy is still joyboy", Output: 6`, () => {
    expect(lengthOfLastWord('luffy is still joyboy')).toEqual(6)
  })
})
