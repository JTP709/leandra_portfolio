const mongoose = require('mongoose');

const Blog = require('../../schema/schema.js').Blog;

mongoose.connect('mongodb://127.0.0.1:27017');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to database');
	Blog.find(function (err, blogs) {
	  if (err) return console.error(err);
	  console.log(blogs);
		mongoose.disconnect();
	});
});
