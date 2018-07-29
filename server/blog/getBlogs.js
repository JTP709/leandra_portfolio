const mongoose = require('mongoose');
const Blog = require('../schema/schema.js').Blog;

const getBlogs = (req, res) => {
	Blog.find(function (err, blogs) {
		if (err) {
			console.log('getBlogs error: ', err);
			res.send(err);
		} else {
			console.log('getBlogs success');
			const filteredHiddenBlogs = blogs.filter(blog => { return !blog.hidden });
			res.send(filteredHiddenBlogs);
		}
	});
}

exports = module.exports = getBlogs;
