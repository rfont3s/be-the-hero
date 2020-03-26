// Update with your config settings.

module.exports = {

    development: {
        client: 'mysql',
        connection: {
            host: 'localhost',
            database: 'bethehero',
            user: 'root',
            password: '123456',
            charset: 'utf8'
        },
        migrations: {
            directory: './src/database/migrations',
            tableName: 'migrations'
        }
    },

    staging: {
        client: 'postgresql',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'password'
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
        client: 'postgresql',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'password'
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
