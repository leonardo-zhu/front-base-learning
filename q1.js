const funcs = [
  function (num, next) {
    num += 1
    num = next(num)
    num += 1
  },
  function (num, next) {
    num += 2
    num = next(num)
    num += 2
  }
]

function use(arr) {
  return function (num) {

  }
}

const wrapper = use(focus)
wrapper(2) // 8
wrapper(5) // 11


const first = () => new Promise((resolve, reject) => {
  console.log(3)
  let p = new Promise((resolve, reject) => {
    console.log(7)
    setTimeout(() => {
      console.log(5)
      resolve(6)
    }, 0)
    resolve(1)
  })
  resolve(2)
  p.then((arg) => {
    console.log(arg)
  })

})

first().then((arg) => {
  console.log(arg)
})
console.log(4)

/**
 * 3
 * 7
 * 4
 * 1
 * 2
 * 5
 */


setTimeout(() => {
  console.log("0")
}, 0)

new Promise((resolve, reject) => {
  console.log("1")
  resolve()
}).then(() => {
  console.log("2")
  new Promise((resolve, reject) => {
    console.log("3")
    resolve()
  }).then(() => {
    console.log("4")
  }).then(() => {
    console.log("5")
  })
}).then(() => {
  console.log("6")
})

new Promise((resolve, reject) => {
  console.log("7")
  resolve()
}).then(() => {
  console.log("8")
})

/**
 * 1
 * 7
 * 2
 * 3
 * 6
 * 8
 * 4
 * 5
 * 0
 */
