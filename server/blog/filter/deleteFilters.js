const mongoose = require('mongoose');
const Filter = require('../../schema/schema.js').Filter;

// TODO: move to constants file
const mongodb_host = process.env.MONGODB_HOST || '127.0.0.1:27017';

const deleteFilters = (req,res) => {
	mongoose.connect(`mongodb://${mongodb_host}`);
	const db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function() {
		console.log('deleteFilters connection success');
		const { id } = req.body;
		Filter.findByIdAndRemove(id, function (err){
			if (err) {
				console.log('deleteFilters error: ', err);
				db.close();
				res.send(err);
			} else {
				console.log('deleteFilters success');
				res.statusCode = 200;
				db.close();
				res.send('success');
			}
		});
	});
}

exports = module.exports = deleteFilters;
