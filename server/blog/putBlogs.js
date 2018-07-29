const mongoose = require('mongoose');
const Blog = require('../schema/schema.js').Blog;

// TODO: move to constants file
const mongodb_host = process.env.MONGODB_HOST || '127.0.0.1:27017';

const putBlogs = (req, res) => {
	const { title, author_date, thumbnail, body, filters, blogId, _id } = req.body;
	const newBlog = new Blog({
		blogId,
		title,
		author_date,
		thumbnail,
		body,
		filters,
		hidden: false
	});
	// mongoose.connect(`mongodb://${mongodb_host}`);
	const db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function() {
		console.log('putBlogs connection success');
		Blog.findByIdAndUpdate(_id, { hidden: true }, function (err){
			if (err) {
				console.error(err);
				res.send(err);
				db.close();
			} else {
				newBlog.save(function (err) {
				if (err) {
					console.log('putBlogs error: ', err);
					db.close();
					res.send(err);
				} else {
					console.log('putBlogs success');
					res.statusCode = 200;
					db.close();
					res.send('success');
				}
			});
			}
		});
	});
}

exports = module.exports = putBlogs;
