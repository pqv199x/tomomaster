'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var EpochDaily = new Schema({
    epochs: [{
        type: Number,
        index: true
    }],
    startEpoch: Number,
    timeStart: Date
}, { timestamps: true })

module.exports = mongoose.model('EpochDaily', EpochDaily)
