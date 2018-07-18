const mongoose = require('mongoose');
const Filter = require('../../schema/schema.js').Filter;

// TODO: move to constants file
const mongodb_host = process.env.MONGODB_HOST || '127.0.0.1:27017';

const deleteFilters = (req,res) => {
	const { id } = req.body;
	Filter.findByIdAndRemove(id, function (err){
		if (err) {
			console.error(err);
			res.send(err);
		} else {
			res.statusCode = 200;
			res.send('success');
		}
	})
}

exports = module.exports = deleteFilters;
