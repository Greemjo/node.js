const TicketsDao = require('../../dao/TicketsDao');

module.exports = async ticket => {
    try {
        return await TicketsDao.add(ticket);
    } catch (error) {
        console.log(error)
        return Promise.reject({ message: error.message });
    }
};


