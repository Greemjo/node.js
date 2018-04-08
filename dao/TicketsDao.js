const dao = require('./base');
const flightDao = require('./FlightDao')
const Ticket = require('../models/Ticket');


class TicketsDao  {
    static async add(ticket){
        let list = await dao.knex("Ticket").where({flight_id: ticket.flight_id});
        let flight = await flightDao.getById(ticket.flight_id);
        if(flight.status === "Waiting" && list.length < flight.seat_count){
            return await dao.knex("Ticket")
                    .insert(ticket)
        }
        if(flight.status === "Postponed")
            throw "Flight is postponed";
        else
            throw "Tickets are not available!";
    }

    static async update(id, ticket){
        return await dao.knex("Ticket")
        update(ticket)
            .where({id})
    }

    static async getById(id) {
        const data = await dao.knex("Ticket")
            .select()
            .where({ id })
            .first();
        return new Ticket(data);
    }

    static async getList() {
        const arr = await dao.knex("Ticket")
            .select();
        return arr.map(ticket => new Ticket(ticket));
    }

    static async delete(id) {
        return dao.knex("Ticket")
            .where({ id })
            .del();
    }
}

module.exports = TicketsDao;

