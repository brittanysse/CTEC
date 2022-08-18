var mysql = require('mysql');

var connection = mysql.createConnection({

    host:'database-1.cfoto0e5rllo.us-east-1.rds.amazonaws.com',

    port: '3306',

    user:'admin',

    password:'password',

    database: 'movie_review'

});



connection.connect(err => {  // test out connetion and console.log error if there is one

    if (err) throw err;

    console.log('Connected To AWS DB');

});

module.exports = connection
