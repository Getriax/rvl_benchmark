const sortFn = (prop, order = 'asc') => {
  const orderValue = order === 'asc' ? 1 : -1

  return (a, b) => orderValue
    * (a[prop] < b[prop]
      ? -1
      : (a[prop] > b[prop] ? 1 : 0))
}

const orderWith = (...sortFunctions) => (objA, objB) => sortFunctions.reduce(
  (currentValue, sortFunc) => (currentValue === 0
    ? sortFunc(objA, objB)
    : currentValue), 0,
)

const onlyAdults = ({ age }) => age >= 18
const toReferenceCode = ({ id, firstName }) => `${firstName}_${id}`
const sortByAgeAndName = orderWith(
  sortFn('age', 'asc'),
  sortFn('firstName', 'desc'),
)

module.exports = data => data
  .filter(onlyAdults)
  .sort(sortByAgeAndName)
  .map(toReferenceCode)

