const router = require('express').Router();
// const connection = require('../db/db');

router.get('/', async (req, res) => {
	try {
		res.status(201).json({ message: 'Attendee get test' });
	} catch (err) {
		res.status(500).json({ error: err });
		console.error('Something went wrong ' + err);
	}
});

router.post('/', async (req, res) => {
	try {
		console.log(req.body);
		res.status(201).json({ message: 'Attendee uploaded to the database correctly' });
	} catch (err) {
		res.status(500).json({ error: err });
		console.error('Something went wrong ' + err);
	}
});

module.exports = router;
