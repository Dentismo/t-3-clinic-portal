const {Dentist} = require('../model/dentist');
const {Booking} = require('../model/booking');
const {Clinic} = require('../model/clinic');
const mongoose = require('mongoose');

class ClinicPortalController {

    constructor() {}

    async dentist(id) {
        try {
            if (!mongoose.Types.ObjectId.isValid(id)) 
                return '{message: "ID is not valid for given request"}';

            const dentist = await Dentist.findById(id);  

            if (!dentist)
                return '{message: "Dentist could not be found with given ID"}';

            return JSON.stringify(dentist);

        } catch (error) {
            console.log(error)
            return '{message: "Dentist could not be found with given ID"}';
        }
        
    }

    //async bookingRequests(dentist_id) {}

    // async clinic() {
    //     const clinics = await Clinic.find({});
    //     return JSON.stringify(clinics);
    // }
}

module.exports = ClinicPortalController