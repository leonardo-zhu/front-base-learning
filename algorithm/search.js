/**
 * 二分查找
 * @param nums
 * 有序的数组
 * @param target
 * 目标数
 * @returns {number}
 * 目标数下标
 */
function binarySearch(nums, target) {
  let middle = 0;
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    middle = Math.floor((left + right) / 2)

    if (nums[middle] === target) {
      return middle
    }

    if (nums[middle] > target) {
      right = middle - 1
    }

    if (nums[middle] < target) {
      left = middle + 1
    }
  }

  return -1
}
