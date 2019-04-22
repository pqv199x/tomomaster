'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var WatchList = new Schema({
    voter: { type: String, index: true },
    whiteList: [{
        type: String,
        index: true
    }],
    blackList: [{
        type: String,
        index: true
    }]
}, { timestamps: true })

module.exports = mongoose.model('WatchList', WatchList)
