const dao = require('./base');
const Airport = require('../models/Airport');


class AirportDao  {
    static async addAirport({id, name, country, region, img_url}){
        return await dao.knex
        insert({id, name, country, region, img_url})
            .from('Aerport')
    }


    static async update(id,{name, country, region, img_url}){
        return await dao.knex
        update({name,country, region, img_url})
            .from('Aerport')
            .where({id})
    }

    static async getById(id) {
        const data = await dao.knex
            .select()
            .from('Aerport')
            .where({ id })
            .first();
        return new Airport(data);
    }

    static async getList() {
        const airport_arr = await dao.knex
            .select()
            .from('Aerport');
        return airport_arr.map(airport => new Airport(airport));
    }

    static async delete(id) {
        return dao.knex
            .from('Aerport')
            .where({ id })
            .del();
    }
}

module.exports = AirportDao;