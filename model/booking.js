const mongoose = require("mongoose")

const bookingRequestSchema = new mongoose.Schema({
    user: {
        email: {
            type: String,
            required: true,
            unique: true,
            match: /^\w+(\.-?\w+)*@\w+(\.-?\w+)*(\.\w{2,3})+$/
        },
        name: {
            type: String,
            required: true
        }
    },
    clinicId: {
        type: String,
        required: true
    },
    issuance: {
        type: String, 
        unique: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('bookingRequest', bookingRequestSchema)
