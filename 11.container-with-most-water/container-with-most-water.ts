export function maxArea(height: number[]): number {
  let left = 0
  let right = height.length - 1
  let maxArea = 0

  while (left < right) {
    const width = right - left
    // 水高度
    const currentHeight = Math.min(height[left], height[right])
    // 水面積
    const currentArea = width * currentHeight
    if (currentArea > maxArea) {
      maxArea = currentArea
    }
    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }
  return maxArea
}
