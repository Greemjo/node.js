const TicketsDao = require('../../dao/TicketsDao');
module.exports = async () => {
    try {
        return await TicketsDao.getList();
    } catch (error) {
        return Promise.reject({ message: error.message });
    }
};


