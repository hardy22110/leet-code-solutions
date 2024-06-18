export function romanToInt(s: string): number {
  const mapping: Record<string, (nextNumeral: string) => [number, boolean?]> = {
    I: (nextNumeral: string) => {
      const ma: Record<string, number> = {
        V: 4,
        X: 9,
      }
      if (nextNumeral && ma[nextNumeral]) {
        return [ma[nextNumeral], true]
      }
      return [1]
    },
    V: () => [5],
    X: (nextNumeral: string) => {
      const ma: Record<string, number> = {
        L: 40,
        C: 90,
      }
      if (nextNumeral && ma[nextNumeral]) {
        return [ma[nextNumeral], true]
      }
      return [10]
    },
    L: () => [50],
    C: (nextNumeral: string) => {
      const ma: Record<string, number> = {
        D: 400,
        M: 900,
      }
      if (nextNumeral && ma[nextNumeral]) {
        return [ma[nextNumeral], true]
      }
      return [100]
    },
    D: () => [500],
    M: () => [1000],
  }
  // 字串轉陣列
  const strList = [...s]
  let temp = 0
  let i = 0
  while (i < strList.length) {
    const [current, isNext] = mapping[strList[i]](strList[i + 1])
    if (isNext) {
      i++
    }
    temp += current || 0
    i++
  }
  return temp
}
