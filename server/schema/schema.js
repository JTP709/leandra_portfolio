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

const filterSchema = new Schema({
	filter: String
});

const portfolioSchema = new Schema({
  rank: String,
  title: String,
  thumbnail: String,
  carousel: [{
    img: String,
    label: String,
    subLabel: String
  }],
  about: String,
  front_end: [String],
  back_end: [String],
  hidden: Boolean,
  github: String,
  demo: String
});

const Blog = mongoose.model('Blog', blogSchema);
const Filter = mongoose.model('Filter', filterSchema);
const Portfolio = mongoose.model('Portfolio', portfolioSchema);

module.exports.Blog = Blog;
module.exports.Filter = Filter;
module.exports.Portfolio = Portfolio;