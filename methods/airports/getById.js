const AirportDao = require('../../dao/AirportDao');

module.exports = async id => {
    try {
        return await AirportDao.getById(id);
    } catch (error) {
        return Promise.reject({ message: error.message });
    }
}
