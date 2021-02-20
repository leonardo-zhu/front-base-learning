//Promise 串行化
const createPromise = (wait, result) => new Promise(resolve => setTimeout(resolve, wait, result))
const promises = [
  createPromise(200, 1),
  createPromise(100, 2),
  createPromise(300, 3)
]

function runPromiseByQueue(promises) {
  return promises.reduce((pre, curr) =>
    pre.then(res => {
      console.log(res)
      return curr
    }))
}

// runPromiseByQueue(promises).then(res => console.log(res))


function compareVersion(version1, version2) {
  const v1 = version1.split(".")
  const v2 = version2.split(".")

  for (let i = 0; i < Math.max(v1.length, v2.length); i++) {
    const str1 = v1[i] === undefined ? 0 : Number.parseInt(v1[i])
    const str2 = v2[i] === undefined ? 0 : Number.parseInt(v2[i])

    if (str1 !== str2) return str1 > str2 ? 1 : -1
  }

  return 0
}

console.log(compareVersion("1.0", "1.0.0"))

function isPalindrome(s) {
  let match = ""
  const reg = /[a-zA-Z]|[0-9]/
  for (let i = 0; i < s.length; i++) {
    match += reg.test(s[i]) ? s[i] : ""
  }
  match = match.toLowerCase()
  const reverseMatch = match.split("").reverse().join("")

  return match === reverseMatch
};

isPalindrome("race a car");

(function (nums) {
  let index = 0
  nums.forEach(num => {
    if (num !== 0) {
      nums[index++] = num;
    }
  })

  for (let i = index; i < nums.length; i++) {
    nums[i] = 0;
  }
  console.log(nums)
})();

