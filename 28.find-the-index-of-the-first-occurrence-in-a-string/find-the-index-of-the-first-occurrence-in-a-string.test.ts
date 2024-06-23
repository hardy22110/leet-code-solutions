import { strStr } from './find-the-index-of-the-first-occurrence-in-a-string'

describe('28.find-the-index-of-the-first-occurrence-in-a-string', () => {
  test(`Input: haystack = "sadbutsad", needle = "sad", Output: 0`, () => {
    expect(strStr('sadbutsad', 'sad')).toEqual(0)
  })

  test(`Input: haystack = "leetcode", needle = "leeto", Output: -1`, () => {
    expect(strStr('leetcode', 'leeto')).toEqual(-1)
  })

  test(`Input: haystack = "mississippi", needle = "issip", Output: 4`, () => {
    expect(strStr('mississippi', 'issip')).toEqual(4)
  })
})
