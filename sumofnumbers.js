/*
 * Solving E26 for ICS 314
 * By: April Bala
 * 09/17/2017
 */

const list = [5, 10, 15, 20];

function sumFor(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}

console.log(sumFor(list));

function sumWhile(nums) {
  let sum = 0;
  let i = 0;
  while (i < nums.length) {
    sum += nums[i];
    i++;
  }
  return sum;
}

console.log(sumWhile(list));

function sumRecursion(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + sumRecursion(nums.slice(1, nums.length));
}

console.log(sumRecursion(list));

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function (memo, num) { return memo + num; });
}

console.log(sumTheSimpleWay(list));
