// Input: [-1, 0, 1, 2, -1, -4]
// Output: [-4, -1, -1, 0, 1, 2]
var bubbleSort = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let temp = target - nums[i];
    if (map.has(temp)) {
      return [map.get(temp), i];
    }
    map.set(nums[i], i);
  }
};

console.log(bubbleSort([-1, 0, 1, 2, -1, -4]));
