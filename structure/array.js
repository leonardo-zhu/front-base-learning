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

console.log(unique([2,1,5,1,2,2,6,1]))

// 数组去重2
function unique2(arr) {
  return arr.filter((value, index) => arr.indexOf(value) === index)
}

// 数组扁平化
function flat(arr) {
  return arr.flat(Infinity)
}

// 数组扁平化2
function flat2(arr) {
  let strArr = JSON.stringify(arr)
  strArr = strArr.replace(/(\[|\])/g, "")
  return JSON.parse(`[${strArr}]`)
}

function flat3(arr) {
  let result = [];

  for(let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      result = result.concat(flat3(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(flat2([1, [2, [3, 4]]]))
