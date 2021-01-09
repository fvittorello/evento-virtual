const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.options('*', cors());

// Routes
const attendees = require('./routes/attendees');
app.use('/attendees', attendees);

//	Error Handler
app.use((err, req, res, next) => {
	console.error(err);
	res.status(500).json({ error: err });
});

// Server init
app.listen('5050', () => {
	const date = new Date();
	console.log(`Server started on port ${app.get('port') || 5050} - ${date}`);
});
