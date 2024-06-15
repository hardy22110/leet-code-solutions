export function longestPalindrome(s: string): string {
  // 字串轉陣列
  const strList = [...s]
  let resultList: string[] = []

  for (let index = 0; index < strList.length; index++) {
    const current = strList[index]
    let temp = [current]
    for (let a = index + 1; a < strList.length; a++) {
      temp.push(strList[a])
      if (current === strList[a]) {
        if (temp.every((e, ii, aaaaa) => e === aaaaa[aaaaa.length - 1 - ii])) {
          if (resultList.length < temp.length) {
            resultList = [...temp]
          }
        }
      }
    }
  }
  if (resultList.length === 0) {
    return strList[0]
  }
  return resultList.join('')
}
