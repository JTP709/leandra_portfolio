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
	Blog.findByIdAndUpdate(_id, { hidden: true }, function (err, blog){
		if (err) {
			console.error(err);
			res.send(err);
		} else {
			newBlog.save(function (err, title) {
		    if (err) {
		    	console.error(err);
		    	res.send(err);
		    } else {
					res.statusCode = 200;
					res.send('success');
		    }
		  });
		}
	});
}

exports = module.exports = putBlogs;
