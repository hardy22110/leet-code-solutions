export function longestCommonPrefix(strs: string[]): string {
  const mappingStr = [...strs[0]]
  let all = ''
  for (let i = 0; i < mappingStr.length; i++) {
    const current = mappingStr[i]
    const isExist = strs.every((str) => str[i] === current)
    if (isExist) {
      all += current
    } else {
      return all
    }
  }
  return all
}
