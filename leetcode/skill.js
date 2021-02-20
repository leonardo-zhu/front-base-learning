/**
 * 巧用数组下标
 * @param arr
 * [1, 6, 3, 4, 5, 3, 2, 8, 7, 6, 2, 5, 1, 4]
 */
function a(arr) {
  const map = new Map()
  arr.forEach(key => {
    let value = map.get(key)
    value ? map.delete(key) : map.set(key, key)

  })
  return Array.from(map.keys())
}

a([1, 6, 3, 4, 5, 3, 2, 8, 7, 6, 2, 5, 1, 4])
