const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const getBlogs = require('./blog/getBlogs.js');
const postBlogs = require('./blog/postBlogs.js');
const putBlogs = require('./blog/putBlogs.js');
const deleteBlogs = require('./blog/deleteBlogs.js');

const getFilters = require('./blog/filter/getFilters.js');
const postFilters = require('./blog/filter/postFilters.js');
const putFilters = require('./blog/filter/putFilters.js');
const deleteFilters = require('./blog/filter/deleteFilters.js');

const getPortfolio = require('./portfolio/getPortfolio.js');

const app = express();
const port = process.env.PORT || 5000;
const mongodb_host = process.env.MONGODB_HOST || '127.0.0.1:27017';

mongoose.Promise = global.Promise;

mongoose.connect(`mongodb://${mongodb_host}`)
  .then(() =>  console.log('connection successful'))
  .catch((err) => console.error(err));

app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
// TODO: https://expressjs.com/en/resources/middleware/cors.html

app.get('/api/blogs/get', getBlogs);
app.post('/api/blogs/new', postBlogs);
app.put('/api/blogs/update', putBlogs);
app.delete('/api/blogs/delete', deleteBlogs);

app.get('/api/blogs/filters', getFilters);
app.post('/api/blogs/filters/new', postFilters);
app.put('/api/blogs/filters/update', putFilters);
app.delete('/api/blogs/filters/delete', deleteFilters);

app.get('/api/portfolio/get', getPortfolio);

app.listen(port, () => console.log(`Listening on port ${port}`));
