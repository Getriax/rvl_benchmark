const buildSortFn = (prop, order = 'asc') => {
  const orderValue = order === 'asc' ? 1 : -1

  return (a, b) => orderValue
  * (a[prop] < b[prop]
    ? -1
    : (a[prop] > b[prop] ? 1 : 0))
}

const sorters = [
  buildSortFn('age', 'asc'),
  buildSortFn('lastName', 'desc'),
  buildSortFn('firstName', 'desc'),
]

const byAllSorters = (objA, objB) => sorters.reduce(
  (currentValue, sortFunc) => (currentValue === 0
    ? sortFunc(objA, objB)
    : currentValue), 0,
)

module.exports = data => [...data].sort(byAllSorters)
