const config = require('config')
const moment = require('moment')
const web3Rpc = require('../models/blockchain/web3rpc')
const logger = require('../helpers/logger')
// const db = require('../models/mongodb')

async function updateEpochTime (fromEpoch, toEpoch) {
    try {
        let array = []
        const b = {}
        const set = new Set()
        if (!toEpoch) {
            const latestBlockNumber = await web3Rpc.eth.getBlockNumber()
            toEpoch = parseInt((latestBlockNumber / config.get('blockchain.epoch')))
        }
        logger.info('Crawling from %s to %s', fromEpoch, toEpoch)
        for (let i = fromEpoch; i <= toEpoch; i++) {
            const endBlock = i * config.get('blockchain.epoch')
            const startBlock = endBlock - config.get('blockchain.epoch') + 1

            const epochStartBlock = (i - 1) * config.get('blockchain.epoch')

            console.log(`
            epoch: ${i}
            startBlock: ${startBlock}
            endBlock: ${endBlock}
            epochStartBlock: ${epochStartBlock}`)

            const block = await web3Rpc.eth.getBlock(epochStartBlock)
            // console.log(block)
            const epochCreatedAt = moment(new Date(block.timestamp * 1000))
            const epochCreatedAtDate = epochCreatedAt.startOf('day').toDate().toISOString()
            if (set.has(epochCreatedAtDate)) {
                array.push(i)
            } else {
                if (array.length > 0) {
                    b[epochCreatedAtDate] = {
                        epochs: [],
                        startEpoch: 0
                    }
                    b[epochCreatedAtDate]['epochs'] = array
                    b[epochCreatedAtDate]['startEpoch'] = array[0]
                }
                set.add(epochCreatedAtDate)
                array = [i]
            }
            // check time
        }
        console.log(b)
    } catch (error) {
        throw error
    }
}

module.exports = { updateEpochTime }

updateEpochTime(1, 336)
