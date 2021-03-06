const AirportDao = require('../../dao/AirportDao');

module.exports = async params => {
    try {
        return await AirportDao.delete(params.id);
    } catch (error) {
        return Promise.reject({ message: error.message });
    }
};
