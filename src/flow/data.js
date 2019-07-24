const faker = require('faker')

const buildUser = ({
  id = faker.random.number(),
  firstName = faker.name.firstName(),
  lastName = faker.name.lastName(),
  email = faker.internet.email(),
  age = faker.random.number({ min: 5, max: 80 }),
} = {}) => ({
  id,
  firstName,
  lastName,
  email,
  age,
})

module.exports = {
  buildData: num => new Array(num).fill(0).map(buildUser),
  sampleData: [
    buildUser({ age: 10 }),
    buildUser({ age: 20 }),
    buildUser({ age: 31 }),
    buildUser({ age: 20 }),
  ],
}
