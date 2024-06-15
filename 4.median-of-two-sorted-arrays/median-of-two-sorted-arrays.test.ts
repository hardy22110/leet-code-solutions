import { findMedianSortedArrays } from './median-of-two-sorted-arrays'

test('Input: nums1 = [1, 3], nums2 = [2], Output: 2.00000', () => {
  expect(findMedianSortedArrays([1, 3], [2])).toEqual(2.0)
})

test('Input: nums1 = [1,2], nums2 = [3,4], Output: 2.50000', () => {
  expect(findMedianSortedArrays([1, 2], [3, 4])).toEqual(2.5)
})

test('Input: nums1 = [1,2], nums2 = [3,4], Output: 2.50000', () => {
  expect(findMedianSortedArrays([1, 2], [3, 4])).toEqual(2.5)
})

test('Input: nums1 = [3], nums2 = [-2, -1], Output: -1.0', () => {
  expect(findMedianSortedArrays([3], [-2, -1])).toEqual(-1.0)
})
