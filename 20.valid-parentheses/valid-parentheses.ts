export function isValid(s: string): boolean {
  const mapping: Record<string, string> = {
    '(': ')',
    '[': ']',
    '{': '}',
  }
  const strList = [...s]

  let temp = []
  for (let index = 0; index < strList.length; index++) {
    const element = strList[index]
    if (mapping[element]) {
      temp.push(element)
    } else {
      let tt = temp.pop()
      if (!tt || mapping[tt] !== element) {
        return false
      }
    }
  }

  return temp.length === 0
}
