// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
var threeSum = function (nums) {
  // const map = new Map();
  // for (let i = 0; i < nums.length; i++) {
  //   let temp = target - nums[i];
  //   if (map.has(temp)) {
  //     return [map.get(temp), i];
  //   }
  //   map.set(nums[i], i);
  // }
  nums.sort((a, b) => a - b);
  console.log("nums", nums);
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
