const express = require('express');
const testBlogs = require('./client/src/testBlogData');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;
const mongodb_host = process.env.MONGODB_HOST || '127.0.0.1:27017';
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

app.use(cors());
// TODO: https://expressjs.com/en/resources/middleware/cors.html

app.all('/api/blogs', (req, res) => {
	if (req.method === 'GET') {
		mongoose.connect(`mongodb://${mongodb_host}`);
		const db = mongoose.connection;
		db.on('error', console.error.bind(console, 'connection error:'));
		db.once('open', function() {
		  console.log('connected to database');
			Blog.find(function (err, blogs) {
			  if (err) return res.send(err);
			  res.send(blogs);
			});
		});
	} else if (req.method === 'POST') {
		// const blog = req.body;
		// const newBlog = new Blog({
		// 	title: blog.title,
		// 	date: blog.date,
		// 	thumbnail: blog.thumbnail,
		// 	body: blog.blurb,
		// 	filters: blog.filters,
		// 	hidden: false
		// });
		// newBlog.save(function (err, newBlog.title) {
	 //    if (err) return console.error(err);
	 //    //res.send()
	 //  });
	}
});

app.post('/api/blogs')

app.listen(port, () => console.log(`Listening on port ${port}`));