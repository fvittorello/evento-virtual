const router = require('express').Router();
const connection = require('../db/db');
const dbValidation = require('../middlewares/dbValidation');

router.get('/', async (req, res) => {
	try {
		res.status(201).json({ message: 'Attendee get test' });
	} catch (err) {
		res.status(500).json({ error: err });
		console.error('Something went wrong ' + err);
	}
});

router.post('/', dbValidation, async (req, res) => {
	try {
		const { name, lastname, email, country, phone, position } = req.body;

		const postAttendee = await connection.execute(
			'INSERT INTO attendees (name, lastname, email, country, phone, position) VALUES (?,?,?,?,?,?)',
			[name, lastname, email, country, phone, position],
			(err, results) => {
				if (err) {
					console.error(err);
					res.status(401).json({ error: err });
				}
			}
		);

		res.status(201).json({ message: `${name} ${lastname} was succesfully added to de database` });
	} catch (err) {
		console.error('Something went wrong ' + err);
		res.status(500).json({ error: err });
	}
});

module.exports = router;
