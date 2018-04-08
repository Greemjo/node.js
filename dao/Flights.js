const dao = require('./base');
const Flight = require('../models/Flight')

class FlightsDao {
    static async GetList() {
        return await dao.knex
            .select()
            .from('flight');
    }


    static async GetById(id) {
        const data = await dao.knex
            .select()
            .from('flight')
            .where({id})
            .first();
        return new Flight(data);
    }

    static async addFlight(params) {
        const {from, to, start_date, num_of_seats, airplane_name} = params;

        return await dao.knex('flight')
            .insert({
                airport_from_id: from,
                airport_to_id: to,
                seat_count: num_of_seats,
                start_date: start_date,
                status: "waiting",
                airplane_name: airplane_name
            })
            .returning('*')
            .toString();
    }

    static async updateStatus(params) {
        const {id, status} = params;

        return await dao.knex('flight')
            .where('id', id)
            .update({
                status: status
            })
    }
}


module.exports = FlightDao;