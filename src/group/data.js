const faker = require('faker')

const buildCity = ({
  name = faker.address.city(),
  state = faker.address.state(),
  lat = faker.address.latitude(),
  long = faker.address.longitude(),
} = {}) => ({
  name,
  state,
  lat,
  long,
})

module.exports = {
  buildData: num => new Array(num).fill(0).map(buildCity),
  sampleData: [
    buildCity({ state: 'California' }),
    buildCity({ state: 'California' }),
    buildCity({ state: 'Hawaii' }),
    buildCity({ state: 'Hawaii' }),
  ],
}
