const connection = require('../db/db');

async function searchDuplicated(req, res, next) {
	try {
		// const search = await connection.execute(
		connection.execute('SELECT * FROM attendees WHERE (email) = (?)', [req.body.email], (err, result) => {
			if (err) {
				console.error(err);
				res.status(500).json({ message: 'Something went wrong on the select query' });
			}
			if (result.length !== 0) {
				res.status(400).json({ message: 'The email to submit its already on the database' });
			} else {
				next();
			}
		});
	} catch (err) {
		console.log(err);
	}
}

module.exports = searchDuplicated;
