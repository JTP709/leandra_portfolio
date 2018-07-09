const express = require('express');
const testBlogs = require('./client/src/testBlogData');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const uuidv4 = require('uuid/v4');

const app = express();
const port = process.env.PORT || 5000;
const mongodb_host = process.env.MONGODB_HOST || '127.0.0.1:27017';
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

app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
// TODO: https://expressjs.com/en/resources/middleware/cors.html

app.get('/api/blogs', (req, res) => {
	// TODO: filter out duplicate IDs, return most recent edit date (create a created_by date field), filter out hidden.
	mongoose.connect(`mongodb://${mongodb_host}`);
	const db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function() {
	  console.log('connected to database');
		Blog.find(function (err, blogs) {
		  if (err) return res.send(err);
		  const filteredHiddenBlogs = blogs.filter(blog => { return !blog.hidden });
		  res.send(filteredHiddenBlogs);
		});
	});
});

app.post('/api/blogs/new', (req, res) => {
	const { title, author_date, thumbnail, body, filters } = req.body;
	const blogId = uuidv4();
	const newBlog = new Blog({
		blogId,
		title,
		author_date,
		thumbnail,
		body,
		filters,
		hidden: false
	});
	newBlog.save(function (err, title) {
    if (err) {
    	console.error(err)
    	res.send(err)
    } else {
    	res.statusCode = 200;
    	res.send('success');
    }
  });
});

app.put('/api/blogs/update', (req, res) => {
	const { title, author_date, thumbnail, body, filters, blogId, _id } = req.body;
	const newBlog = new Blog({
		blogId,
		title,
		author_date,
		thumbnail,
		body,
		filters,
		hidden: false
	});
	//TODO: set original blog post hidden to true
	Blog.findByIdAndUpdate(_id, { hidden: true }, function (err, blog){
		if (err) {
			console.error(err);
			res.send(err);
		} else {
			newBlog.save(function (err, title) {
		    if (err) {
		    	console.error(err);
		    	res.send(err);
		    } else {
					res.statusCode = 200;
					res.send('success');
		    }
		  });
		}
	});
});

app.delete('/api/blogs/delete', (req, res) => {
	const { id } = req.body;
	Blog.findByIdAndUpdate(id, { hidden: true }, function (err){
    if (err) {
    	console.error(err);
    	res.send(err);
    } else {
			res.statusCode = 200;
			res.send('success');
    }
  });
})

app.listen(port, () => console.log(`Listening on port ${port}`));
