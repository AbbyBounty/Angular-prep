

const mysql=require('mysql2')


const pool=mysql.createPool({

    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'mystore',
    port:8889,
    // socketPath:'/Applications/MAMP/tmp/mysql/mysql.sock',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

module.exports=pool