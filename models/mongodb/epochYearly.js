'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var EpochYearly = new Schema({
    epochs: [{
        type: Number,
        index: true
    }],
    startEpoch: Number,
    timeStart: Date
}, { timestamps: true })

module.exports = mongoose.model('EpochYearly', EpochYearly)
