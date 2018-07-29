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
		console.log('deleteBlogs connection success');
		Blog.findByIdAndUpdate(id, { hidden: true }, function (err){
			if (err) {
				console.log('deleteBlogs error: ', err);
				db.close();
				res.send(err);
			} else {
				console.log('deleteBlogs success');
				res.statusCode = 200;
				db.close();
				res.send('success');
			}
		});
	});
}

exports = module.exports = deleteBlogs;
