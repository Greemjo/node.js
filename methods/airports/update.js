const AirportDao = require('../../dao/AirportDao');

module.exports = async params => {
    try {
        return await AirportDao.update(id,{name, country, region, img_url});
    } catch (error) {
        return Promise.reject({ message: error.message });
    }
};
