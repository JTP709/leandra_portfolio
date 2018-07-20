const mongoose = require('mongoose');
const Blog = require('../schema/schema.js').Blog;

// TODO: move to constants file
const mongodb_host = process.env.MONGODB_HOST || '127.0.0.1:27017';

const deleteBlogs = (req, res) => {
	const { id } = req.body;
	mongoose.connect(`mongodb://${mongodb_host}`);
	const db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function() {
		Blog.findByIdAndUpdate(id, { hidden: true }, function (err){
			if (err) {
				console.error(err);
				res.send(err);
				db.close();
			} else {
				res.statusCode = 200;
				res.send('success');
				db.close();
			}
		});
	});
}

exports = module.exports = deleteBlogs;
