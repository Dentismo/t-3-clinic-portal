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
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true,
        default: 'pending',
        enum: ['approved', 'pending', 'denied']
    },
    start: {
        type: String,
        required: true
    },
    end: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('BookingRequest', bookingRequestSchema)
