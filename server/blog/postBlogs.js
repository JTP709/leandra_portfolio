const mongoose = require('mongoose');
const Blog = require('../schema/schema.js').Blog;
const uuidv4 = require('uuid/v4');

// TODO: move to constants file
const mongodb_host = process.env.MONGODB_HOST || '127.0.0.1:27017';

const postBlogs = (req, res) => {
	const { title, author_date, thumbnail, body, filters } = req.body;
	const blogId = uuidv4();
	const newBlog = new Blog({
		blogId,
		title,
		author_date,
		thumbnail,
		body,
		filters,
		hidden: false
	});
	mongoose.connect(`mongodb://${mongodb_host}`);
	const db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function() {
		newBlog.save(function (err, title) {
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

exports = module.exports = postBlogs;
