const mongoose = require('mongoose');
const Filter = require('../../schema/schema.js').Filter;

const postFilters = (req,res) => {
	const { filter } = req.body;
	const newFilter = new Filter({ filter });
	newFilter.save(function (err) {
		if (err) {
			console.log('postFilters error: ', err);
			res.send(err)
		} else {
			console.log('postFilters success');
			res.statusCode = 200;
			res.send('success');
		}
	});
}

exports = module.exports = postFilters;
