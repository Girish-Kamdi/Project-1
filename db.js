let mysql = require('mysql');

let con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'GWK1609%',
    database: 'gamers'
});

module.exports = con;