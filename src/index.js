const Benchmark = require('benchmark')
const BenchLogger = require('beautify-benchmark')
const mapAsset = require('./map')
const executeWithTime = require('./logTime')

const assets = {
  map: mapAsset,
}

const [_, __, assetName, ...lengths] = process.argv
const asset = assets[assetName]

if (!asset) {
  console.log(`Asset ${assetName} is unavailable`)
  process.exit(0)
}

const defaultDataLengths = [10, 100, 1e4, 1e6]
const actualLengths = lengths.length
  ? lengths
  : defaultDataLengths

console.log({ actualLengths })

const {
  lodash,
  ramda,
  vanilla,
  buildData,
} = asset

actualLengths.forEach((dataLength) => {
  const data = buildData(+dataLength)
  const suite = new Benchmark.Suite(`RVL ${assetName}`)

  suite
    .add(`Lodash ${dataLength}`, () => lodash(data))
    .add(`Ramda ${dataLength}`, () => ramda(data))
    .add(`Vanilla ${dataLength}`, () => vanilla(data))
    .on('cycle', event => BenchLogger.add(event.target))
    .on('complete', () => {
      BenchLogger.log()
    })
    .run()
})


// executeWithTime(type, asset[type], data)
