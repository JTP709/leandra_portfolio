const testBlogs = require('./client/src/testBlogData');
const mongoose = require('mongoose');

const Blog = require('../../schema/schema.js').Blog;
const Filter = require('../../schema/schema.js').Filter;

mongoose.connect('mongodb://127.0.0.1:27017');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to database');
  Blog.remove({}, function(err) { 
   console.log('blogs removed') 
	});
  Filter.remove({}, function(err) {
    console.log('filters removed')
  });
});
