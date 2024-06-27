export function plusOne(digits: number[]): number[] {
  return String(BigInt(digits.join('')) + BigInt('1'))
    .split('')
    .map((_) => Number(_))
}
