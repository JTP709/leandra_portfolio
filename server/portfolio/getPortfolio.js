const mongoose = require('mongoose');
const Portfolio = require('../schema/schema.js').Portfolio;

const getPortfolio = (req, res) => {
	Portfolio.find(function (err, work) {
		if (err) {
			res.send(err);
		} else {
			const filteredHiddenWork = work.filter(work => { return !work.hidden });
			res.send(filteredHiddenWork);
		}
	});
}

exports = module.exports = getPortfolio;
