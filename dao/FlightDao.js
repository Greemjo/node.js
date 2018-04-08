const dao = require('./base');
const Flight = require('../models/Flight')

class FlightsDao {
    static async GetList() {
        return await dao.knex
            .select()
            .from('Flight');
    }


    static async GetById(id) {
        const data = await dao.knex
            .select()
            .from('Flight')
            .where({id})
            .first();
        return new Flight(data);
    }

    static async addFlight(params) {
        const {from, to, start_date, num_of_seats, airplane_name} = params;

        return await dao.knex('Flight')
            .insert({
                airport_from_id: from,
                airport_to_id: to,
                seat_count: num_of_seats,
                start_date: start_date,
                status: "Waiting",
                airplane_name: airplane_name
            });
    }

    static async updateStatus(params) {
        const {id, status} = params;

        return await dao.knex('Flight')
            .where('id', id)
            .update({
                status: status
            })
    }

    static async getAvailableFromTo (params) {
        const {from, to} = params;

        return await dao.knex('Flight')
            .select()
            .where('airport_from_id', dao.knex.raw(`?`, [from]))
            .andWhere('airport_to_id', dao.knex.raw(`?`, [to]))
            .andWhere('start_date', '>', dao.knex.raw(`?`, [new Date()]))
            .andWhere('status', dao.knex.raw(`?`, ['Waiting']))
    }
}


module.exports = FlightsDao;