const {Dentist} = require('../model/dentist');
const Booking = require('../model/booking');
const Clinic = require('../model/clinic');
const mongoose = require('mongoose');

class ClinicPortalController {

    constructor() {}

    async dentist(id) {
        //const dentist = await Dentist.findById(id);
        const dentist = await Dentist.findOne({ _id: id });

        if (!dentist)
            return '{message: "Dentist could not be found with given ID"}';

        return JSON.stringify(dentist);
    }

    //async bookingRequest() {}

    //async clinic() {}
}

module.exports = ClinicPortalController

// const dentist = async (id) => {
//     const dentist = await Dentist.findById(id);

//     if (!dentist)
//         return '{message: "Dentist could not be found with given ID"}';

//    return dentist;     
// }

// module.exports = dentist;