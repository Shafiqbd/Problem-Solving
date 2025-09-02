// Input: [-1, 0, 1, 2, -1, -4]
// Output: [-4, -1, -1, 0, 1, 2]
const bubbleSort = function (nums) {
  let n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  return nums;
};

// console.log(bubbleSort([-1, 0, 1, 2, -1, -4]));

const quickSort = function (nums) {
  let n = nums.length;
  if (n <= 1) return nums;
  let pivot = nums[n - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < n - 1; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }
  console.log(left, pivot, right);
  return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log(quickSort([-1, 0, 1, 2, -1, -4]));
