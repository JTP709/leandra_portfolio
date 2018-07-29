const mongoose = require('mongoose');
const Portfolio = require('../schema/schema.js').Portfolio;

// TODO: move to constants file
const mongodb_host = process.env.MONGODB_HOST || '127.0.0.1:27017';

const getPortfolio = (req, res) => {
	// TODO: filter out duplicate IDs, return most recent edit date (create a created_by date field), filter out hidden.
	mongoose.connect(`mongodb://${mongodb_host}`);
	const db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function() {
		console.log('getPortfolio connection success');
		Portfolio.find(function (err, work) {
		  if (err) {
				console.log('getPortfolio error: ', err);
				db.close();
				res.send(err);
			} else {
				const filteredHiddenWork = work.filter(work => { return !work.hidden });
				console.log('getPortfolio success');
				db.close();
				res.send(filteredHiddenWork);
			}
		});
	});
}

exports = module.exports = getPortfolio;
