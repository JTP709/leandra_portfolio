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
		console.log('postBlogs connection success');
		newBlog.save(function (err, title) {
			if (err) {
				console.log('postBlogs error: ', err);
				db.close();
				res.send(err);
			} else {
				console.log('postBlogs success');
				res.statusCode = 200;
				db.close();
				res.send('success');
			}
		});
	});
}

exports = module.exports = postBlogs;
