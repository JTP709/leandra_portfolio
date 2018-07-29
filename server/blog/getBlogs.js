const mongoose = require('mongoose');
const Blog = require('../schema/schema.js').Blog;

// TODO: move to constants file
const mongodb_host = process.env.MONGODB_HOST || '127.0.0.1:27017';

const getBlogs = (req, res) => {
	// TODO: filter out duplicate IDs, return most recent edit date (create a created_by date field), filter out hidden.
	// mongoose.connect(`mongodb://${mongodb_host}`);
	const db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function() {
		console.log('getBlogs connection success');
		Blog.find(function (err, blogs) {
		  if (err) {
				console.log('getBlogs error: ', err)
				db.close();
				res.send(err);
			} else {
				console.log('getBlogs success');
				const filteredHiddenBlogs = blogs.filter(blog => { return !blog.hidden });
				db.close();
				res.send(filteredHiddenBlogs);
			}
		});
	});
}

exports = module.exports = getBlogs;
