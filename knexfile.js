// Update with your config settings.
const path = require('path');

const DB_CLIENT = process.env.DB_CLIENT ?? 'mysql' || 'mysql'
const DB_SCHEMA = process.env.DB_SCHEMA ?? 'biblioteca' || 'biblioteca'
const DB_HOST = process.env.DB_HOST ?? 'localhost' || 'localhost'
const DB_USERNAME = process.env.DB_USERNAME ?? 'root' || 'root'
const DB_PASSWORD = process.env.DB_PASSWORD ?? '' || ''

module.exports = {
  development: {
    client: DB_CLIENT,
    connection: {
      database: DB_SCHEMA,
      host: DB_HOST,
      user: DB_USERNAME,
      password: DB_PASSWORD
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: path.resolve(__dirname, 'database', 'migrations')
    },
    seeds: {
      directory: path.resolve(__dirname, 'database', 'seeds')
    }
  },

  staging: {
    client: DB_CLIENT,
    connection: {
      database: DB_SCHEMA,
      user:     DB_USERNAME,
      password: DB_PASSWORD
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
    client: DB_CLIENT,
    connection: {
      database: DB_SCHEMA,
      user:     DB_USERNAME,
      password: DB_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
