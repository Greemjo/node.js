const knex = require("knex");
const config = require("../knexfile");

class BaseDao {
  constructor(knex) {
    this.knex = knex;
  }
  exit() {
    this.knex.destroy();
  }
}

module.exports = new BaseDao(knex(config));