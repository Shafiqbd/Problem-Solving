

## 3sum

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

## Solving Approach:
• Sort the array.
• Iterate i from 0 to n-3:
• If i > 0 and nums[i] == nums[i-1], continue (skip duplicate triplets).
• Set left = i + 1, right = nums.length - 1.
• While left < right:
• Compute total = nums[i] + nums[left] + nums[right].
• If total == 0:
• Add triplet to result.
• Move left/right to next unique numbers.
• If total < 0, move left pointer right.
• If total > 0, move right pointer left.