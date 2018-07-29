const mongoose = require('mongoose');
const Filter = require('../../schema/schema.js').Filter;

const getFilters = (req,res) => {
	Filter.find(function (err, filters) {
		if (err) {
			console.log('getFilters error: ', err)
			res.send(err);
		} else {
			console.log('getFilters success');
			res.send(filters);
		}
	});
}

exports = module.exports = getFilters;
