const TicketsDao = require('../../dao/TicketsDao');

module.exports = async params => {
    try {
        return await TicketsDao.delete(params.id);
    } catch (error) {
        return Promise.reject({ message: error.message });
    }
};

