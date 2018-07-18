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
const filterSchema = new Schema({
	filter: String
});
const Filter = mongoose.model('Filter', filterSchema);

module.exports.Blog = Blog;
module.exports.Filter = Filter;