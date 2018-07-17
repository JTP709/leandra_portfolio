const mongoose = require('mongoose');
const Blog = require('../schema.js').Blog;

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
	newBlog.save(function (err, title) {
    if (err) {
    	console.error(err)
    	res.send(err)
    } else {
    	res.statusCode = 200;
    	res.send('success');
    }
  });
}

exports = module.exports = postBlogs;
