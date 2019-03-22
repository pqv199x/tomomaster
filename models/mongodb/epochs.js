var mongoose = require('mongoose')

var schema = () => ({
    epochs: [{
        type: Number,
        index: true
    }],
    startEpoch: Number,
    timeStart: Date
})

var Epochs = schema()

var epochSchema = mongoose.Schema(Epochs, {
    timestamps: true
})

var epochDaily = mongoose.model('EpochDaily', epochSchema)
var epochWeekly = mongoose.model('EpochWeekly', epochSchema)
var epochMonthly = mongoose.model('EpochMonthly', epochSchema)
var epochYearly = mongoose.model('EpochYearly', epochSchema)

module.exports = {
    epochDaily,
    epochMonthly,
    epochWeekly,
    epochYearly
}
