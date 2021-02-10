const PENDING = "pending"
const RESOLVED = "resolved"
const REJECTED = "rejected"
const SETTLED = [RESOLVED, REJECTED]

class Promise {
  status = PENDING
  data = undefined
  onResolvedCallbacks = []  // Promise resolve时的回调函数集，因为在Promise结束之前有可能有多个回调添加到它上面
  onRejectedCallbacks = []

  constructor(executor) {
    const resolve = (value) => {

      if (this.status !== PENDING) {
        return;
      }

      this.status = RESOLVED
      this.data = value

      setTimeout(() => {
        this.onResolvedCallbacks.forEach(onResolved => {
          onResolved(value)
        })
      })

    }

    const reject = (reason) => {

      if (this.status !== PENDING) {
        return;
      }

      this.status = REJECTED
      this.data = reason

      setTimeout(() => {
        this.onRejectedCallbacks.forEach(onRejected => {
          onRejected(reason)
        })
      })
    }

    try {
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }

  // todo: then方法待完善
  then(onResolved, onRejected) {
    // 返回新的Promise对象
    return new Promise((resolve, reject) => {
      if (this.status === PENDING) {
        onResolved && this.onResolvedCallbacks.push(() => onResolved(this.data))
        onRejected && this.onRejectedCallbacks.push(() => onRejected(this.data))
      }

      if (this.status === RESOLVED) {
        setTimeout(() => {
          try {
            // 如果回调函数返回的是 Promise，则 这个Promise 的结果就是 需要 return 的 Promise的结果
            const result = onResolved(this.data)
            result instanceof Promise ?
              result.then(resolve, reject) :
              resolve(result)

          } catch (err) {
            reject(err)
          }
        }, 0)
      }

      if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            // 如果回调函数返回的是 Promise，则 这个Promise 的结果就是 需要 return 的 Promise的结果
            const result = onRejected(this.data)
            result instanceof Promise ?
              result.then(resolve, reject) :
              resolve(result)
          } catch (err) {
            reject(err)
          }
        }, 0)
      }
    })
  }

  catch(onRejected) {
    return this.then(null,onRejected)
  }

  static resolve(value) {
    return new Promise((resolve, reject) => value instanceof Promise ? value.then(resolve, reject) : resolve(value))
  }

  static reject(reason) {
    return new Promise((_, reject) => void reject(reason))
  }

  /**
   *
   * @param promises
   * @returns {Promise}
   * 如果传入的参数是一个空的可迭代对象，则返回一个已完成（already resolved）状态的 Promise。
   * 如果传入的参数不包含任何 promise，则返回一个异步完成（asynchronously resolved） Promise。注意：Google Chrome 58 在这种情况下返回一个已完成（already resolved）状态的 Promise。
   * 其它情况下返回一个处理中（pending）的Promise。这个返回的 promise 之后会在所有的 promise 都完成或有一个 promise 失败时异步地变为完成或失败。
   */

  static all(promises) {
    const arr = Array.from(promises)
    const results = []
    let i = 0;
    return new Promise((resolve, reject) => {
      arr.forEach((p, index) => {
        Promise.resolve(p).then(
          value => {
            i++
            results[index] = value
            if (i === arr.length) {
              resolve(results)
            }
          },
          reason => reject(reason)
        )
      })
    })
  }

  /**
   *
   * @param promises
   * @returns {Promise}
   */
  static race(promises) {
    const arr = Array.from(promises)
    return new Promise((resolve, reject) => {
      arr.forEach(p => {
        Promise.resolve(p)
          .then(resolve,reject)
      })
    })
  }
}


module.exports = Promise
