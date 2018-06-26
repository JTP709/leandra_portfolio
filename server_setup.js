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

 //  testBlogs.map(blog => {
	// 	const newBlog = new Blog({
	// 		title: blog.title,
	// 		date: blog.date,
	// 		thumbnail: blog.thumbnail,
	// 		body: blog.blurb,
	// 		filters: blog.filters,
	// 		hidden: false
	// 	});
	// 	newBlog.save(function (err, newBlog.title) {
	//     if (err) return console.error(err);
	//     console.log(`${newBlog.title} added to database`);
	//   });
	// });

	Blog.find(function (err, blogs) {
	  if (err) return console.error(err);
	  console.log(blogs);
	});


});



// Blog
// 	id
// 	title
// 	date
// 	text
// 	filter
// 	thumbnail