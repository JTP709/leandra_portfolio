const mongoose = require('mongoose');
const Filter = require('../../schema/schema.js').Filter;

const putFilters = (req,res) => {
	const { id, filter } = req.body;
	Filter.findByIdAndUpdate(id, { filter }, function (err){
		if (err) {
			console.log('putFilters error: ', err);
			res.send(err);
		} else {
			console.log('putFilters success');
			res.statusCode = 200;
			res.send('success');
		}
	});
}

exports = module.exports = putFilters;
