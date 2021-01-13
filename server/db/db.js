const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	database: process.env.DB_NAME,
	password: process.env.DB_PASS,
	port: process.env.DB_PORT,
});

// Test Connection to DB
// connection.connect((err) => {
// 	if (err) {
// 		console.log('error connecting ' + err.stack);
// 		return;
// 	}
// 	console.log('connected as id ' + connection.threadId);
// });

module.exports = connection;
