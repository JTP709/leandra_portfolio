const express = require('express');
const testBlogs = require('./client/src/testBlogData');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

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
app.use(bodyParser.json()); // for parsing application/json
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
		const { title, date, thumbnail, body, filters } = req.body;
		const newBlog = new Blog({
			title: title,
			date: date,
			thumbnail: thumbnail,
			body: body,
			filters: filters,
			hidden: false
		});
		newBlog.save(function (err, title) {
	    if (err) return console.error(err);
	    //res.send()
	  });
	}
});

app.post('/api/blogs')

app.listen(port, () => console.log(`Listening on port ${port}`));
