const faker = require('faker')

const buildProduct = ({
  name = faker.commerce.productName(),
  price = faker.commerce.price(),
  category = faker.commerce.productAdjective(),
} = {}) => ({
  name,
  price,
})

module.exports = {
  buildData: num => new Array(num).fill(0).map(buildProduct),
  sampleData: [
    buildProduct(),
    buildProduct(),
    buildProduct(),
    buildProduct(),
  ],
}
