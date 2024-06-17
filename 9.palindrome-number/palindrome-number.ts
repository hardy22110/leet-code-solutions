export function isPalindrome(x: number): boolean {
  const strList = [...String(x)]
  for (let i = 0; i < strList.length; i++) {
    const current = strList[i]
    if (current !== strList[strList.length - 1 - i]) {
      return false
    }
  }
  return true
}
