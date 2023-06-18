# DSA-MOCK-TEST-2
<br>

### 1)Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well. You must not use any built-in exponent function or operator. 

### Example 1:
### Input: x = 4 Output: 2 Explanation: The square root of 4 is 2, so we return 2.
### Example 2:

### Input: x = 8 Output: 2 Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
### Constraints:

### 0 <= x <= 231 - 1

<br>

### Answer:

```
File name: operator.js
The code uses a binary search approach to find the square root of the input number x. It starts with a left pointer at 0 and a right pointer initially set to half of x. It calculates the square of the middle value and compares it with x.

If the square is equal to x, it returns the middle value as the square root. If the square is less than x, it updates the left pointer to mid + 1 to search in the upper half. If the square is greater than x, it updates the right pointer to mid to search in the lower half.

The binary search continues until the left pointer crosses the right pointer. At that point, the left pointer - 1 represents the square root rounded down to the nearest integer.

The code has a time complexity of O(log(x)), as it performs a binary search on the range from 0 to x/2.

``` 

<br>

### 2)You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

### You may assume the two numbers do not contain any leading zero, except the number 0 itself.


### Example 1:

### Input: l1 = [2,4,3], l2 = [5,6,4] Output: [7,0,8]
### Explanation: 342 + 465 = 807.

### Example 2:

### Input: l1 = [0], l2 = [0] Output: [0]

### Example 3:

### Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9] Output: [8,9,9,9,0,0,0,1]

### Constraints:

### The number of nodes in each linked list is in the range [1, 100].
### 0 <= Node.val <= 9
### It is guaranteed that the list represents a number that does not have leading zeros.

<br>

### Answer:

```
File name:numbers.js
In this code
The code defines a ListNode class to represent each node in the linked list. The addTwoNumbers function takes two linked lists l1 and l2 as input and returns the sum as a new linked list.

The code uses a while loop to iterate through both linked lists, adding the corresponding digits and maintaining a carry value. It calculates the sum of the current digits, updates the carry, and creates a new node with the sum as the value. The current pointer keeps track of the current node in the resulting linked list.

After the loop, the function returns the dummy.next node, which points to the head of the resulting linked list.

In the test case, two input linked lists l1 and l2 are created and passed to the addTwoNumbers function. The resulting linked list is traversed, and each value is concatenated to the output string. Finally, the output string is logged to the console.

The code has a time complexity of O(max(n, m)), where n and m are the lengths of the input linked lists l1 and l2.
```
