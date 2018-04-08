const TicketsDao = require('../../dao/TicketsDao');

module.exports = async (id, ticket) => {
    try {
        return await TicketsDao.update(id, ticket);
    } catch (error) {
        return Promise.reject({ message: error.message });
    }
};