// tests/addTwoNumbers.test.ts

import { ListNode, addTwoNumbers } from './add-two-numbers'

function createLinkedList(arr: number[]): ListNode | null {
  let dummy = new ListNode(0)
  let current = dummy

  for (let num of arr) {
    current.next = new ListNode(num)
    current = current.next
  }

  return dummy.next
}

function linkedListToArray(head: ListNode | null): number[] {
  let arr: number[] = []
  while (head !== null) {
    arr.push(head.val)
    head = head.next
  }
  return arr
}

test('Input: l1 = [2,4,3], l2 = [5,6,4], Output: [7,0,8]', () => {
  let l1 = createLinkedList([2, 4, 3])
  let l2 = createLinkedList([5, 6, 4])
  let result = addTwoNumbers(l1, l2)
  expect(linkedListToArray(result)).toEqual([7, 0, 8])
})

test('Input: l1 = [0], l2 = [0], Output: [0]', () => {
  let l1 = createLinkedList([0])
  let l2 = createLinkedList([0])
  let result = addTwoNumbers(l1, l2)
  expect(linkedListToArray(result)).toEqual([0])
})

test('Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9], Output: [8,9,9,9,0,0,0,1]', () => {
  let l1 = createLinkedList([9, 9, 9, 9, 9, 9, 9])
  let l2 = createLinkedList([9, 9, 9, 9])
  let result = addTwoNumbers(l1, l2)
  expect(linkedListToArray(result)).toEqual([8, 9, 9, 9, 0, 0, 0, 1])
})
