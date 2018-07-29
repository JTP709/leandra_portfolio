const mongoose = require('mongoose');
const Portfolio = require('../schema/schema.js').Portfolio;

const getPortfolio = (req, res) => {
	Portfolio.find(function (err, work) {
		if (err) {
			console.log('getPortfolio error: ', err);
			res.send(err);
		} else {
			const filteredHiddenWork = work.filter(work => { return !work.hidden });
			console.log('getPortfolio success');
			res.send(filteredHiddenWork);
		}
	});
}

exports = module.exports = getPortfolio;
