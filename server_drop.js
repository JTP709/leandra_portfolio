const testBlogs = require('./client/src/testBlogData');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const blogSchema = new Schema({
  blogId: String,
  title:  String,
  author_date: { type: Date },
  created_date: { type: Date, default: Date.now},
  thumbnail: String,
  body:   String,
  filters: [String],
  hidden: Boolean
});
const Blog = mongoose.model('Blog', blogSchema);


mongoose.connect('mongodb://127.0.0.1:27017');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to database');
  Blog.remove({}, function(err) { 
   console.log('collection removed') 
	});
});
