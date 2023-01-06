const Dentist = require('../models/dentist.js');
const Clinic = require('../models/clinic.js');
const mongoose = require('mongoose');

class ClinicPortalController {

    constructor() {}

    // Returns the specific dentist
    async getDentist(obj) {
        const id = obj._id
        try {
            if (!mongoose.Types.ObjectId.isValid(id) || id === null) 
                return {message: 'ID is not valid for given request'};

            const dentist = await Dentist.findById(id);  

            if (!dentist)
                return {message: 'Dentist could not be found with given ID'};

            return JSON.stringify(dentist);

        } catch (error) {
            console.log(error)
            return {message: 'Dentist could not be found with given ID'};
        }
        
    }

    // Returns the specific clinic's information
    async getClinic(messageBody) {
        try {
            const { _id } = messageBody

            console.log(`\n ${_id} \n`)

            if (!mongoose.Types.ObjectId.isValid(_id) || _id === null) 
                return {message: 'ID is not valid for given request'};

            const clinic = await Clinic.findById(_id); 

            if (!clinic)
                return {message: 'Clinic could not be found with given ID'};

            return clinic;

        } catch (error) {
            console.log(error)
            return {message: 'Clinic could not be found with given ID'};
        }
    }

    // Returns the list of all clinics
    async getClinics() {
        try {
            const clinics = await Clinic.find({}); 

            if (!clinics)
                return {message: 'Clinics were not found!'};

            return JSON.stringify(clinics);

        } catch (error) {
            console.log(error)
            return {message: 'Clinics could not be found'};
        }
    }
}

module.exports = ClinicPortalController