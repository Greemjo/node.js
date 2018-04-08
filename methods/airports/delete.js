const AirportDao = require('../../dao/AirportDao');

module.exports = async params => {
    try {
        return await AirportDao.delete(id);
    } catch (error) {
        return Promise.reject({ message: error.message });
    }
};
