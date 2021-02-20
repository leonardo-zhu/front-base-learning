function get(obj, path, defaultValue) {
  path = path.replace("[", ".").replace("]", "")
  let res = obj
  path.split(".").forEach(p => {
    res = res[p]
  })
  return res ? res : defaultValue
}

const obj = { selector: { to: { toutiao: 'FE coder' } }, target: [1, 2, { name: 'byted' }] };
get(obj, 'selector.to.toutiao')
get(obj, 'target[0]')
get(obj, 'target[2].name')


function set(obj, path, value) {
  return path.split(".").reduce((a, c) => (a && a[c] ? a[c] : (value || null)), obj)
}

const a = {}
console.log(set(a, "b.b[0]", 1))

