'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var ProjectSchema = schema({
    name: String,
    description: String,
    tags: [String],
    lang: [String],
    year: Number,
    image: String,
});

module.exports = mongoose.model('Project', ProjectSchema);