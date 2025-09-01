// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let temp = target - nums[i];
    if (map.has(temp)) {
      return [map.get(temp), i];
    }
    map.set(nums[i], i);
  }
};

console.log(twoSum([3, 2, 4], 6));
