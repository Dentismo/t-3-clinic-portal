const mongoose = require("mongoose")

const clinicSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dentists: {
        type: Number
    },
    owner: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    coordinate: {
        longitude: {
            type: Number,
            required: true
        },
        latitude: {
            type: Number,
            required: true
        }
    },
    openinghours: {
        monday: {
            start: {
                type: Number,
                required: true
            },
            end: {
                type: Number,
                required: true
            }
        },
        tuesday: {
            start: {
                type: Number,
                required: true
            },
            end: {
                type: Number,
                required: true
            }
        },
        wednesday: {
            start: {
                type: Number,
                required: true
            },
            end: {
                type: Number,
                required: true
            }
        },
        thursday: {
            start: {
                type: Number,
                required: true
            },
            end: {
                type: Number,
                required: true
            }
        },
        friday: {
            start: {
                type: Number,
                required: true
            },
            end: {
                type: Number,
                required: true
            }
        }
    }
});

module.exports = mongoose.model('clinics', clinicSchema)