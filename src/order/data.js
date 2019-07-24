const faker = require('faker')

const buildUser = ({
  firstName = faker.name.firstName(),
  lastName = faker.name.lastName(),
  age = faker.random.number({ min: 10, max: 80 }),
} = {}) => ({
  firstName,
  lastName,
  age,
})

module.exports = {
  buildData: num => new Array(num).fill(0).map(buildUser),
  sampleData: [
    buildUser({ age: 20 }),
    buildUser({ age: 20, lastName: 'Foo' }),
    buildUser(),
    buildUser({ age: 20, lastName: 'Foo' }),
  ],
}
