const express = require('express');
const testBlogs = require('./client/src/testBlogData');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const uuidv4 = require('uuid/v4');

const getBlogs = require('./server/blog/getBlogs.js');
const postBlogs = require('./server/blog/postBlogs.js');
const putBlogs = require('./server/blog/putBlogs.js');
const deleteBlogs = require('./server/blog/deleteBlogs.js');

const getFilters = require('./server/blog/getFilters.js');
const postFilters = require('./server/blog/postFilters.js');
const putFilters = require('./server/blog/putFilters.js');
const deleteFilters = require('./server/blog/deleteFilters.js');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
// TODO: https://expressjs.com/en/resources/middleware/cors.html

app.get('/api/blogs', getBlogs);

app.post('/api/blogs/new', postBlogs);

app.put('/api/blogs/update', putBlogs);

app.delete('/api/blogs/delete', deleteBlogs);

app.get('/api/blogs/filters', getFilters);

app.post('/api/blogs/filters/new', postFilters);

app.put('/api/blogs/filters/update', putFilters);

app.delete('/api/blogs/filters/delete', deleteFilters);

app.listen(port, () => console.log(`Listening on port ${port}`));
