const mongoose = require('mongoose');

const Portfolio = require('../../schema/schema.js').Portfolio;

mongoose.connect('mongodb://127.0.0.1:27017');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to database');
	Portfolio.find(function (err, portfolio) {
	  if (err) return console.error(err);
	  console.log(portfolio);
		mongoose.disconnect();
	});
});
