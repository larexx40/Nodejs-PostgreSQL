const  Pool =require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'testdb',
    password: 'admin',
    port: 5432,
})

module.exports = pool