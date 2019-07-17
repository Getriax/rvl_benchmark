const faker = require('faker')

const buildUser = ({
  firstName = faker.name.firstName(),
  lastName = faker.name.lastName(),
  email = faker.internet.email(),
  avatar = faker.image.avatar(),
} = {}) => ({
  firstName,
  lastName,
  email,
  avatar,
})

module.exports = num => new Array(num).fill(buildUser())
