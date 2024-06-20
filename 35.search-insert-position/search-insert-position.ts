export function searchInsert(nums: number[], target: number): number {
  let insertIndex = 0
  for (let index = 0; index < nums.length; index++) {
    const currentItem = nums[index]
    if (currentItem === target) {
      insertIndex = index
    }
    if (target > currentItem) {
      insertIndex++
    }
  }
  return insertIndex
}
