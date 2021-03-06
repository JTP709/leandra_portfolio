const testBlogs = require('./testBlogData');
const testPortfolio = require('./testPortfolioData');
const mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');

const Blog = require('../../schema/schema.js').Blog;
const Filter = require('../../schema/schema.js').Filter;
const Portfolio = require('../../schema/schema.js').Portfolio;

const testFilters = ['life','design','cooking','animals', 'travel'];

mongoose.connect('mongodb://127.0.0.1:27017');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to database');

  testBlogs.map(blog => {
  	const { title, date, thumbnail, header_img, body, filters } = blog;
		const blogId = uuidv4();
		const newBlog = new Blog({
			blogId: blogId,
			title: title,
			author_date: date,
			thumbnail: thumbnail,
			header_img: header_img,
			body: body,
			filters: filters,
			hidden: false
		});
		newBlog.save(function (err, title) {
	    if (err) return console.error(err);
	    console.log(`${blog.title} added to database`);
			mongoose.disconnect();
	  });
	});

  testFilters.map(filter => {
  	const newFilter = new Filter({ filter });
  	newFilter.save(function (err, title) {
  		if (err) return console.error(err);
  		console.log(`${filter} added to the database`);
			mongoose.disconnect();
  	});
	});
	
	testPortfolio.map(portfolio => {
		const {
			rank,
			title,
			thumbnail,
			carousel,
			about,
			front_end,
			back_end,
			hidden,
			github,
			demo
		} = portfolio;
		const newPortfolio = new Portfolio({
			rank,
			title,
			thumbnail,
			carousel,
			about,
			front_end,
			back_end,
			hidden,
			github,
			demo
		})
		newPortfolio.save(function (err, title) {
	    if (err) return console.error(err);
	    console.log(`${portfolio.title} added to database`);
			mongoose.disconnect();
	  });
	})

});
