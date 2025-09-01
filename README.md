

## 1. 3sum

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

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

```sort(nums)
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
return result```