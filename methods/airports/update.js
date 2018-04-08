const AirportDao = require('../../dao/AirportDao');

module.exports = async (id, airport) => {
    try {
        return await AirportDao.update(id, airport);
    } catch (error) {
        return Promise.reject({ message: error.message });
    }
};