export function lengthOfLongestSubstring(s: string): number {
  let mapping: string[] = []
  let maxLength = 0
  // 字串轉陣列
  const strList = [...s]
  for (let rightIndex = 0; rightIndex < strList.length; rightIndex++) {
    const current = strList[rightIndex]
    let existIndex = -1
    for (let a = 0; a < mapping.length; a++) {
      if (current === mapping[a]) {
        existIndex = a
        break
      }
    }
    // 已存在
    if (existIndex !== -1) {
      mapping = mapping.filter((_, i) => i > existIndex)
    }
    mapping.push(current)
    if (maxLength <= mapping.length) {
      maxLength = mapping.length
    }
  }
  return maxLength
}
