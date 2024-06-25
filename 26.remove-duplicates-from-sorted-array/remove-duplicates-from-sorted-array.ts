export function removeDuplicates(nums: number[]): number {
  let currentIndex = 0
  const all: number[] = []
  let writeIndex = 0
  while (currentIndex < nums.length) {
    if (!all.includes(nums[currentIndex])) {
      all.push(nums[currentIndex])
      nums[writeIndex] = all[writeIndex]
      writeIndex++
    }
    currentIndex++
  }
  return all.length
}
