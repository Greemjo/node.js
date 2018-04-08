const AirportDao = require('../../dao/AirportDao');

module.exports = async airport => {
    try {
        console.log(airport)
        return await AirportDao.add(airport);
    } catch (error) {
        return Promise.reject({ message: error.message });
    }
};


