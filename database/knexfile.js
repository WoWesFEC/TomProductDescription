// Update with your config settings.

module.exports = {

  client: 'mysql',
  connection: {
    user: 'test',
    password: 'T3%tt#5t',
    database: 'FECdata'
  }

  /*
  development: {
    client: 'mysql',
    connection: {
      filename: './dev.sqlite3'
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      database: 'FECdata',
      user:     'test',
      password: 'T3%tt#5t'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: '127.0.0.1',
    connection: {
      database: 'FECdata',
      user:     'test',
      password: 'T3%tt#5t'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'items'
    }
  }
*/
};
