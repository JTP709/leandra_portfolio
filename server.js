const express = require('express');
const testBlogs = require('./client/src/testBlogData');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();
const port = process.env.PORT || 5000;
const mongodb_host = process.env.MONGODB_HOST || '127.0.0.1:27017';
app.use(cors());
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
		res.send(req.body);
	}
});

app.post('/api/blogs')

app.listen(port, () => console.log(`Listening on port ${port}`));