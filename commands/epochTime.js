// const config = require('config')
// const moment = require('moment')
// const web3Rpc = require('../models/blockchain/web3rpc')
// const logger = require('../helpers/logger')
// const db = require('../models/mongodb')

// async function updateEpochTime (fromEpoch, toEpoch) {
//     try {
//         let array = []
//         const b = {}
//         let timeStart
//         const set = new Set()
//         const map1 = new Map()
//         if (!toEpoch) {
//             const latestBlockNumber = await web3Rpc.eth.getBlockNumber()
//             toEpoch = parseInt((latestBlockNumber / config.get('blockchain.epoch')))
//         }
//         logger.info('Crawling from %s to %s', fromEpoch, toEpoch)
//         for (let i = fromEpoch; i <= toEpoch; i++) {
//             const epochStartBlock = (i - 1) * config.get('blockchain.epoch')

//             const block = await web3Rpc.eth.getBlock(epochStartBlock)
//             // console.log(block)
//             const epochCreatedAt = moment(new Date(block.timestamp * 1000))
//             const epochCreatedAtDate = epochCreatedAt.startOf('day').toDate().toISOString()
//             // const epochCreatedAtWeek = epochCreatedAt.startOf('week').toDate().toISOString()
//             // const epochCreatedAtMonth = epochCreatedAt.startOf('month').toDate().toISOString()
//             // const epochCreatedAtYear = epochCreatedAt.startOf('year').toDate().toISOString()
//             console.log(`
//                 epoch: ${i}
//                 epochCreatedAtDate: ${epochCreatedAtDate}`)
//             if (!map1.get(i)) {
//                 console.log(222)
//                 map1.set(i, epochCreatedAtDate)
//                 if (i > 0 && array.length > 0) {
//                     b[epochCreatedAtDate] = {
//                         epochs: [],
//                         startEpoch: 0
//                     }
//                     b[epochCreatedAtDate]['epochs'] = array
//                     b[epochCreatedAtDate]['startEpoch'] = array[0]
//                 }
//                 array = [i]
//             } else {
//                 array.push(i)
//                 console.log(array)
//             }
//             // if (set.has(epochCreatedAtDate)) {
//             //     array.push(i)
//             // } else {
//             //     b[epochCreatedAtDate] = {
//             //         epochs: [],
//             //         startEpoch: 0
//             //     }
//             //     b[epochCreatedAtDate]['epochs'] = array
//             //     b[epochCreatedAtDate]['startEpoch'] = array[0]
//             //     // store db
//             //     // db.EpochDaily.updateOne({
//             //     //     timeStart: epochCreatedAtDate
//             //     // }, {
//             //     //     timeStart: epochCreatedAtDate,
//             //     //     epochs: array,
//             //     //     startEpoch: array[0]
//             //     // }, { upsert: true })
//             //     //     .then(() => console.log(`Day ${epochCreatedAtDate} Done`))
//             //     //     .catch(e => console.log(e))
//             //     set.add(epochCreatedAtDate)
//             //     array = [i]
//             // }
//         }
//         console.log(b)
//         logger.info('All Done')
//     } catch (error) {
//         throw error
//     }
// }

// module.exports = { updateEpochTime }

// updateEpochTime(1, 20)
