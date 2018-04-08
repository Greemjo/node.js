const TicketsDao = require('../../dao/TicketsDao');

module.exports = async (params) => {
    try {
        return await TicketsDao.update(params.id, params);
    } catch (error) {
        return Promise.reject({ message: error.message });
    }
};