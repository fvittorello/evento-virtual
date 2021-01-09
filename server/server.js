const express = require('express');
const app = express();

app.listen('5050', () => {
	const date = new Date();
	console.log(`Server started on port ${app.get('port') || 5050} - ${date}`);
});
