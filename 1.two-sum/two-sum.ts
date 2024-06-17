export function twoSum(nums: number[], target: number): number[] {
  const sumMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    let currentT = target - nums[i]
    if (sumMap.has(currentT)) {
      return [sumMap.get(currentT)!, i]
    }
    sumMap.set(nums[i], i)
  }
  return []
}
