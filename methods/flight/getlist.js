const Flight = require('../../dao/FlightDao');

module.exports = async params => {
    try {
        return await Flight.getList( );
    } catch (error) {
        return Promise.reject({ message: error.message });
    }
};



