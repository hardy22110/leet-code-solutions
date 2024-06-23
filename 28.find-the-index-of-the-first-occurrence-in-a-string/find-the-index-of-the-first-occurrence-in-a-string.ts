export function strStr(haystack: string, needle: string): number {
  for (let index = 0; index < haystack.length; index++) {
    const currentSubstr = haystack.slice(index, index + needle.length)
    if (currentSubstr === needle) {
      return index
    }
  }
  return -1
}
