const mongoose = require('mongoose');
const Blog = require('../schema/schema.js').Blog;
const uuidv4 = require('uuid/v4');

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
			console.log('postBlogs error: ', err);
			res.send(err);
		} else {
			console.log('postBlogs success');
			res.statusCode = 200;
			res.send('success');
		}
	});
}

exports = module.exports = postBlogs;
