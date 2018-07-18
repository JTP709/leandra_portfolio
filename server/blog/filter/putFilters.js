const mongoose = require('mongoose');
const Filter = require('../../schema/schema.js').Fitler;

// TODO: move to constants file
const mongodb_host = process.env.MONGODB_HOST || '127.0.0.1:27017';

const postFilters = (req,res) => {
	const { id, filter } = req.body;
	Filter.findByIdAndUpdate(id, { filter }, function (err){
    if (err) {
    	console.error(err);
    	res.send(err);
    } else {
			res.statusCode = 200;
			res.send('success');
    }
  });
}

exports = module.exports = postFilters;
