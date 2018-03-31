// Update with your config settings.
module.exports = {
    client: 'postgresql',
    connection: {
      database: 'demo',
      user:     'postgres',
      password: '123'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};
