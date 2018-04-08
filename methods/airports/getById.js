const AirportDao = require('../../dao/AirportDao');

module.exports = async params => {
    try {
        return await AirportDao.getById(id);
    } catch (error) {
        return Promise.reject({ message: error.message });
    }
}
