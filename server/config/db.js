const mysql = require("mysql");

// const db = mysql.createConnection({
//   //   host: process.env.DB_HOST,
//   //   user: process.env.DB_USER,
//   //   password: process.env.DB_PASSWORD,
//   //   database: process.env.DB_DATABASE,
//   //   port : process.env.DB_PORT,
// });

const db = mysql.createPool({
    host: 'meno-db.czaumbq0dnb0.ap-northeast-2.rds.amazonaws.com',
    user: 'meno1011',
    password: 'Zxc12512412!',
    database: 'maintest'
})

module.exports = db;