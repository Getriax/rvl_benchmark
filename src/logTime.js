module.exports = (name, func, ...args) => {
  console.time(name)
  func(...args)
  console.timeEnd(name)
}
