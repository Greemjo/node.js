const Flight = require('../../dao/FlightDao');

module.exports = async params => {
    try {
        return await Flight.getAvailableFromTo(params);
    } catch (error) {
        return Promise.reject({ message: error.message });
    }
};



