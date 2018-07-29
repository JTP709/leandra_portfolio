const mongoose = require('mongoose');
const Filter = require('../../schema/schema.js').Filter;

// TODO: move to constants file
const mongodb_host = process.env.MONGODB_HOST || '127.0.0.1:27017';

const postFilters = (req,res) => {
	// mongoose.connect(`mongodb://${mongodb_host}`);
	const db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function() {
		console.log('postFilters connection success');
		const { filter } = req.body;
		const newFilter = new Filter({ filter });
		newFilter.save(function (err, title) {
			if (err) {
				console.log('postFilters error: ', err)
				db.close();
				res.send(err)
			} else {
				console.log('postFilters success')
				res.statusCode = 200;
				db.close();
				res.send('success');
			}
		});
	});
}

exports = module.exports = postFilters;
