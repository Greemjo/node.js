const TicketsDao = require('../../dao/TicketsDao');

module.exports = async id => {
    try {
        return await TicketsDao.getById(id);
    } catch (error) {
        return Promise.reject({ message: error.message });
    }
};
