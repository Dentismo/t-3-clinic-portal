const {Dentist} = require('../model/dentist');
const Booking = require('../model/booking');
const Clinic = require('../model/clinic');
const mongoose = require('mongoose');

class ClinicPortalController {

    constructor() {}

    async getDentist(id) {
        try {
            if (!mongoose.Types.ObjectId.isValid(id) || id === null) 
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

    async getBookings(clinic_id) {
        try {
            if (!mongoose.Types.ObjectId.isValid(clinic_id) || clinic_id === null) 
                return '{message: "ID is not valid for given request"}';

            const dentistsBookings = await Booking.find({clinicId: clinic_id});
            
            if (!dentistsBookings)
                return '{message: "Bookings could not be found"}';

            return dentistsBookings.toString();    

        } catch (error) {
            console.log(error);
            return '{message: "Bookings could not be found"}';
        }
    }

    async getClinic(id) {
        try {
            if (!mongoose.Types.ObjectId.isValid(id) || id === null) 
                return '{message: "Clinic is not valid for given request"}';

            const clinics = await Clinic.findById(id); 

            if (!clinics)
                return '{message: "Clinic could not be found with given ID"}';

            return JSON.stringify(clinics);

        } catch (error) {
            console.log(error)
            return '{message: "Clinic could not be found with given ID"}';
        }
    }

    async getClinics() {
        try {
            const clinics = await Clinic.find({}); 

            if (!clinics)
                return '{message: "No clinics is found!"}';

            return JSON.stringify(clinics);

        } catch (error) {
            console.log(error)
            return '{message: "Clinics could not be found"}';
        }
    }
}

module.exports = ClinicPortalController