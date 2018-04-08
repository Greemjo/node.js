const Flight = require('../../dao/FlightDao');

module.exports = async params => {
    try {
        return await Flight.GetById(params.id);
    } catch (error) {
        return Promise.reject({ message: error.message });
    }
};



