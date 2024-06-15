export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  const list = [...nums1, ...nums2].sort((a, b) => a - b)
  const mi = list.length / 2 - 1
  const aa = Math.ceil(mi)
  if (mi !== aa) {
    return list[aa]
  } else {
    return (list[mi] + list[mi + 1]) / 2
  }
}
