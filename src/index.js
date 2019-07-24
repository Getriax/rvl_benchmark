const assert = require('assert')
const benchmark = require('nodemark')
const logTime = require('./logTime')

let asset

const [_, __, assetName, ...lengths] = process.argv

try {
  asset = require(`./${assetName}`)
} catch (err) {
  console.log(`Asset ${assetName} is unavailable`)
  process.exit(0)
}

const defaultDataLengths = [10, 100, 1e4, 1e6]
const actualLengths = lengths.length
  ? lengths
  : defaultDataLengths

const {
  lodash,
  ramda,
  vanilla,
  buildData,
  sampleData,
} = asset

const printResult = (name, result) => console.log(`${name}\n${result}\n1 sample in ${result.milliseconds(5)}ms`)

console.log(`Executing ${assetName}\n`)

console.log(sampleData, '\n')

console.log('Result samples')
console.log('Lodash')
const lodashSample = lodash(sampleData)
console.log(lodashSample)

console.log('Ramda')
const ramdaSample = ramda(sampleData)
console.log(ramdaSample)

console.log('Vanilla')
const vanillaSample = vanilla(sampleData)
console.log(vanillaSample)
console.log()

assert.deepEqual(lodashSample, ramdaSample, 'lodash sample result is different than ramda')
assert.deepEqual(ramdaSample, vanillaSample, 'vanilla sample result is different than ramda')

actualLengths.forEach((dataLength) => {
  let x

  let data

  const setup = () => {
    data = buildData(+dataLength)
  }

  console.log(`Data length ${dataLength}`)
  const lodashResult = benchmark(() => lodash(data), setup)
  const ramdaResult = benchmark(() => ramda(data), setup)
  const vanillaResult = benchmark(() => vanilla(data), setup)

  printResult('Lodash', lodashResult)
  printResult('Ramda', ramdaResult)
  printResult('Vanilla', vanillaResult)

  console.log()
})
