const mongoose = require('mongoose');
const Filter = require('../../schema/schema.js').Filter;

const deleteFilters = (req,res) => {
	const { id } = req.body;
	Filter.findByIdAndRemove(id, function (err){
		if (err) {
			console.log('deleteFilters error: ', err);
			res.send(err);
		} else {
			console.log('deleteFilters success');
			res.statusCode = 200;
			res.send('success');
		}
	});
}

exports = module.exports = deleteFilters;
