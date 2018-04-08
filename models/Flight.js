class Flight {
    constructor({id,airport_from_id,airport_to_id,seat_count,airplane_name, start_date, status}){
        this.id = id;
        this.airport_from_id = airport_from_id;
        this.airport_to_id = airport_to_id;
        this.seat_count = seat_count;
        this.airplane_name = airplane_name;
        this.start_date = start_date;
        this.status = status;
    }
}
module.exports = Flight;