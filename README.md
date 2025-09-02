### Table of Contents

| No. | Problems                        |
| --- | ------------------------------- |
| 1   | [Sorting Array](#sorting-array) |
| 2   | [2sum](#2sum)                   |
| 3   | [3sum](#3sum)                   |
| 4   | [4sum](#4sum)                   |

1. ## Sorting Array

Given an array of integers, nums sorting the array without using any build in fuction.<br>
Input: [-1, 0, 1, 2, -1, -4] <br>
Output: [-4, -1, -1, 0, 1, 2]

## Thought Process:

**Minimal Approach**

- Here i will use bubble sort algorithm to sort this array.
- Compare adjacent element of the array.
- If they are wrong order then swap like arr[j] to arr[j+1].
- Keep swapping untill array is sorted.

**Optimal Approach**

- I will use quick sort algorithm to sort this array.
- Use Devide and conquer technique.
- Pick a pivot element
- Partition the array:
- If element smaller then pivot move left side.
- If element larger then pivot move right side.

## Brute-force Approach:

**Minimal Approach**

```
for i = 0 to n-1
   for j = 0 to n-2
      if arr[j] > arr[j+1]
         swap(arr[j], arr[j+1])

```

**Optimal Approach**

```
quicksort(arr):
   if length(arr) <= 1 return arr

   pivot = arr[last]   // bad choice if sorted
   left = elements < pivot
   right = elements >= pivot

   return quicksort(left) + pivot + quicksort(right)


```

## Time and Space Complexity

- Time Complexity: For bubble sort: O(n²) and quick sort: O(n log n)
- Space Complexity: For bubble sort: O(1) and quick sort: O(log n).

## JavaScript Solution

```
var twoSum = function(nums, target) {
 const map = new Map();
 for(let i=0; i<nums.length; i++){
   let temp = target - nums[i];
   if(map.has(temp)){
       return [map.get(temp),i];
   }
   map.set(nums[i],i)
 }
};
```

**[⬆ Back to Top](#table-of-contents)**

2. ## 2sum

Given an array of integers, nums, and a target integer target, return the indices of the two numbers that add up to the target. Each
input will have exactly one solution, and you can't use the same element twice.
Input: nums = [2,7,11,15], target = 9
Output: [0,1]

## Problem link:

LeetCode: [2sum](https://leetcode.com/problems/2sum)

## Thought Process:

- Iterate through each number in the array.
- For every number nums[i], calculate the complement: temp = target - nums[i].
- If the complement already exists in the map, return the pair of indices.
- Otherwise, store the current number with its index in the map for future lookups.

## Brute-force Approach:

- Iterate i from 0 to nums length:
- Apply formula temp = target - nums[i].
- If map has no current match value it will set current value and index into map.
- If the current value exist into map it will retun the pair with value and index.

## Time and Space Complexity

- Time Complexity: O(n), since we traverse the array once and hash map operations are O(1).
- Space Complexity: O(n), for storing up to n elements in the map.

## JavaScript Solution

```
var twoSum = function(nums, target) {
 const map = new Map();
 for(let i=0; i<nums.length; i++){
   let temp = target - nums[i];
   if(map.has(temp)){
       return [map.get(temp),i];
   }
   map.set(nums[i],i)
 }
};
```

**[⬆ Back to Top](#table-of-contents)**

3. ## 3sum

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

## Problem link:

LeetCode: [3sum](https://leetcode.com/problems/3sum)

## Thought Process:

- Sort the array first (to help skip duplicates and use two pointers).
- For each number in the array:
- Fix it as a.
- Use two pointers (left and right) to find pairs in the rest of the array that sum to -a (so total sum is zero).
- Move pointers inward, skipping duplicates.

## Brute-force Approach:

- Sort the array.
- Iterate i from 0 to n-3:
- If i > 0 and nums[i] == nums[i-1], continue (skip duplicate triplets).
- Set left = i + 1, right = nums.length - 1.
- While left < right:
- Compute total = nums[i] + nums[left] + nums[right].
- If total == 0:
- Add triplet to result.
- Move left/right to next unique numbers.
- If total < 0, move left pointer right.
- If total > 0, move right pointer left.

## Time and Space Complexity

- Time: O(n^2) (sorting O(n log n) + O(n^2) for two pointers per element)
- Space: O(n) for output and sort.

## JavaScript Solution

```
sort(nums)
result = []
for i from 0 to nums.length - 3:
if i > 0 and nums[i] == nums[i-1]: continue
left = i + 1
right = nums.length - 1
while left < right:
sum = nums[i] + nums[left] + nums[right]
if sum == 0:
add [nums[i], nums[left], nums[right]] to result
move left and right to skip duplicates
else if sum < 0:
left += 1
else:
right -= 1
return result
```

**[⬆ Back to Top](#table-of-contents)**
