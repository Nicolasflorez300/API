const mongoose = require('mongoose')

const Users = mongoose.model('User', {
    name: { type: String, required: true, minLenght: 3 },
    lastname: { type: String, required: true, minLenght: 3 },
})

module.exports = Users