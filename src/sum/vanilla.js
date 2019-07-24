const sumByPrice = (acc, { price }) => acc + parseFloat(price)

module.exports = data => data.reduce(sumByPrice, 0)

