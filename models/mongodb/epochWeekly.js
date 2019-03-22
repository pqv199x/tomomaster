'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var EpochWeekly = new Schema({
    epochs: [{
        type: Number,
        index: true
    }],
    startEpoch: Number,
    timeStart: Date
}, { timestamps: true })

module.exports = mongoose.model('EpochWeekly', EpochWeekly)
