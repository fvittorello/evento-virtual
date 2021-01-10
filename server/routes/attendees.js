const router = require('express').Router();
const connection = require('../db/db');

router.get('/', async (req, res) => {
	try {
		res.status(201).json({ message: 'Attendee get test' });
	} catch (err) {
		res.status(500).json({ error: err });
		console.error('Something went wrong ' + err);
	}
});

router.post('/', async (req, res) => {
	const { name, lastname, email, country, phone, position } = req.body;
	try {
		console.log(req.body);
		const postAttendee = await connection.execute(
			'INSERT INTO attendees (name, lastname, email, country, phone, position) VALUES (?,?,?,?,?,?)',
			[name, lastname, email, country, phone, position],
			(err, results) => {
				if (err) {
					console.error(err);
					return res.status(401).json({ error: err });
				}
			}
		);

		res.status(201).json({ message: 'Attendee uploaded to the database correctly' });
		return;
	} catch (err) {
		res.status(500).json({ error: err });
		console.error('Something went wrong ' + err);
	}
});

module.exports = router;
