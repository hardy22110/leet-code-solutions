export function removeElement(nums: number[], val: number): number {
  let merge = 0
  for (let index = 0; index < nums.length; index++) {
    const current = nums[index]
    if (current !== val) {
      merge++
    } else {
      nums.splice(index, 1)
      index--
    }
  }
  return merge
}
