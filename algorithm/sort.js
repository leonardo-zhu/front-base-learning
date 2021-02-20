/**
 * 选择排序
 * 首先，找到数组中最小的那个元素，
 * 其次，将它和数组的第一个元素交换位置(如果第一个元素就是最小元素那么它就和自己交换)。
 * 其次，在剩下的元素中找到最小的元素，将它与数组的第二个元素交换位置。
 * 如此往复，直到将整个数组排序。这种方法我们称之为选择排序
 *
 * 时间复杂度 O(n2)
 * @param arr
 */
function selectSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i
    for (let j = i; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  return arr
}

/**
 *
 * 插入排序
 * 1、从数组第2个元素开始抽取元素。
 * 2、把它与左边第一个元素比较，如果左边第一个元素比它大，则继续与左边第二个元素比较下去，直到遇到不比它大的元素，然后插到这个元素的右边。
 * 3、继续选取第3，4，….n个元素,重复步骤 2 ，选择适当的位置插入。
 */
function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let index = i
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[index]) {
        [arr[index], arr[j]] = [arr[j], arr[index]]
        index = j
      } else {
        break
      }
    }
  }
  return arr
}

/**
 * 冒泡排序
 * @param arr
 */
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
      }
    }
  }

  return arr
}

/**
 * 归并排序
 * 分治法的体现
 */

/**
 * 快速排序
 */


module.exports = {
  selectSort,
  insertSort,
  bubbleSort
}
