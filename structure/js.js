// 重写 map
Array.prototype.map = function (callbackfn) {
  const newArr = []
  for (let i = 0; i < this.length; i++) {
    newArr.push(callbackfn(this[i], i, this))
  }
  return newArr
}

// 重写reduce
Array.prototype.reduce = function (callbackfn, initValue) {
  if (this.length < 1 && !initValue) {
    throw TypeError
  }

  let result = initValue || 0;
  for (let i = 0; i < this.length; i++) {
    result = callbackfn(result, this[i], this)
  }
  return result
}

console.log([1, 2, 3, 4, 5].reduce(function (a, b) {
  return a + b
}, 1))

// 重写 some
Array.prototype.some = function (predicate) {
  for (let i = 0; i < this.length; i++) {
    if (predicate(this[i], i, this)) {
      return true
    }
  }
  return false
}

// 重写 every
Array.prototype.every = function (predicate) {
  let flag = false
  for (let i = 0; i < this; i++) {
    flag = Boolean(predicate(this[i], i, this));
  }
  return flag
}

// 重写 instanceof
function cusInstanceof(left, right) {
  if (typeof left !== "object" || left == null) return false
  let proto = Object.getPrototypeOf(left)
  while (true) {
    if (proto === null) return false
    if (proto === right.prototype) return true
    proto = Object.getPrototypeOf(proto)
  }
}

// 重写 apply
Function.prototype.apply = function (thisArg, argArray) {
  const context = thisArg || window;
  const args = argArray || []
  context.fn = this;
  const result = context.fn(...args)
  delete context.fn
  return result;
}

//重写 call
Function.prototype.call = function (thisArg, ...argArray) {
  const context = thisArg || window;
  const args = argArray || []
  context.fn = this;
  const result = context.fn(...args)
  delete context.fn
  return result;
}

//重写 bind
Function.prototype.bind = function (thisArg, argArray) {
  const context = thisArg || window
  const args = argArray || []

  return () => {
    return this.apply(context, args)
  }
}

/**
 * 函数柯里化
 */
function curry(fn, ...args) {
  // 获取函数需要的参数长度
  return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args);
}

/**
 * debounce 实现
 * @param fn
 * @param wait
 * @param option:{ leading = false, trailing = false }
 * @returns {function(...[*]=): void}
 */
function debounce(fn, wait, option) {
  const { leading = false, trailing = false } = option

  let timeout = null
  return (...args) => {
    clearTimeout(timeout)

    if (leading && !timeout) {
      fn.apply(this, args)
    }

    timeout = setTimeout(() => {
      fn.apply(this, args)
      timeout = null
    }, wait)
  }
}
