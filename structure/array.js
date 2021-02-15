// 数组去重
function unique(arr) {
  let temp = arr[0]
  let len = 1
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== temp) {
      arr[len] = arr[i];
      temp = arr[i];
      len++;
    }
  }
  return arr.slice(0, len)
}

// 数组去重2
function unique2(arr) {
  return arr.filter((value, index) => arr.indexOf(value) === index)
}
