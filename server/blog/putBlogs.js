const mongoose = require('mongoose');
const Blog = require('../schema/schema.js').Blog;

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
	Blog.findByIdAndUpdate(_id, { hidden: true }, function (err){
		if (err) {
			console.error(err);
			res.send(err);
		} else {
			newBlog.save(function (err) {
			if (err) {
				console.log('putBlogs error: ', err);
				res.send(err);
			} else {
				console.log('putBlogs success');
				res.statusCode = 200;
				res.send('success');
			}
		});
		}
	});
}

exports = module.exports = putBlogs;
