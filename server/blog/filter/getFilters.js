const mongoose = require('mongoose');
const Filter = require('../../schema/schema.js').Filter;

// TODO: move to constants file
const mongodb_host = process.env.MONGODB_HOST || '127.0.0.1:27017';

const getFilters = (req,res) => {
	// mongoose.connect(`mongodb://${mongodb_host}`);
	const db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function() {
		console.log('getFilters connection success');
		Filter.find(function (err, filters) {
		  if (err) {
				console.log('getFilters error: ', err)
				db.close();
				res.send(err);
			} else {
				console.log('getFilters success');
				db.close();
				res.send(filters);
			}
		});
	});
}

exports = module.exports = getFilters;
