export function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let a = 0; a < nums.length; a++) {
      if (i === a) {
        continue
      }
      if (nums[i] + nums[a] === target) {
        return [i, a]
      }
    }
  }
  return []
}
