const testBlogs = require('./testBlogData');
const mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');

const Blog = require('../../schema/schema.js').Blog;
const Filter = require('../../schema/schema.js').Filter;

const testFilters = ['life','design','cooking','animals', 'travel'];

mongoose.connect('mongodb://127.0.0.1:27017');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to database');

  testBlogs.map(blog => {
  	const { title, date, thumbnail, body, filters } = blog;
		const blogId = uuidv4();
		const newBlog = new Blog({
			blogId: blogId,
			title: title,
			author_date: date,
			thumbnail: thumbnail,
			body: body,
			filters: filters,
			hidden: false
		});
		newBlog.save(function (err, title) {
	    if (err) return console.error(err);
	    console.log(`${blog.title} added to database`);
	  });
	});

  testFilters.map(filter => {
  	const newFilter = new Filter({ filter });
  	newFilter.save(function (err, title) {
  		if (err) return console.error(err);
  		console.log(`${filter} added to the database`);
			mongoose.disconnect();
  	});
  });

});
