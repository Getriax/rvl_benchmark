const groupByState = (acc, obj) => {
  const currentValues = acc[obj.state] || []
  return { ...acc, [obj.state]: currentValues.concat(obj) }
}

module.exports = data => data.reduce(groupByState, {})
