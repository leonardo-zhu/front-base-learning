const Promise = require("./Promise")


// const p =  new Promise((resolve, reject) => {
//   reject(1)
// }).then(
//   value => console.log("value", value),
//   reason => {
//     throw 5
//   }
// ).then(() => console.log(2))
//
// console.log(p)

const p1 = new Promise(res => void setTimeout(() => res(1),1500))
const p2 = new Promise(res => void setTimeout(() => res(2),500))
const p3 = new Promise(res => void setTimeout(() => res(3),1000))


// Promise.all([p1, p2, p3]).then(value => console.log(value))
Promise.race([p1, p2, p3]).then(value => console.log(value))
