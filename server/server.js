const express = require('express');
const mysql = require('mysql2');
const app = express();
const dotenv = require('dotenv');

// Settings
dotenv.config();

app.listen('5050', () => {
	const date = new Date();
	console.log(`Server started on port ${app.get('port') || 5050} - ${date}`);
});
