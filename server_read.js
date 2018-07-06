const testBlogs = require('./client/src/testBlogData');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const blogSchema = new Schema({
  title:  String,
  date: { type: Date, default: Date.now },
  thumbnail: String,
  body:   String,
  filters: [String],
  hidden: Boolean,
});
const Blog = mongoose.model('Blog', blogSchema);


mongoose.connect('mongodb://127.0.0.1:27017');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to database');
	Blog.find(function (err, blogs) {
	  if (err) return console.error(err);
	  console.log(blogs);
	});
});