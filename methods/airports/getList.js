//const AirCraftsDao = require('../../dao/AirCraftsDao');
const AirportDao = require('../../dao/AirportDao');
module.exports = async params => {
    try {
        return await AirportDao.getList();
    } catch (error) {
        return Promise.reject({ message: error.message });
    }
};


