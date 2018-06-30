var date1 = new Date('December 17, 1995 03:24:00');
var date2 = new Date('November 17, 1995 03:24:00');
var date3 = new Date('October 17, 1995 03:24:00');
var date4 = new Date('September 17, 1995 03:24:00');
var date5 = new Date('August 17, 1995 03:24:00');

var text = "### Something, something, something, dark side...\n\n" +
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
		"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
		"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris " +
		"nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in " +
		"reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla " +
		"pariatur. Excepteur sint occaecat cupidatat non proident, sunt in " +
		"culpa qui officia deserunt mollit anim id est laborum.\n\n"+
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
		"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
		"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris " +
		"nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in " +
		"reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla " +
		"pariatur. Excepteur sint occaecat cupidatat non proident, sunt in " +
		"culpa qui officia deserunt mollit anim id est laborum.\n\n"+
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
		"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
		"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris " +
		"nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in " +
		"reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla " +
		"pariatur. Excepteur sint occaecat cupidatat non proident, sunt in " +
		"culpa qui officia deserunt mollit anim id est laborum."

var testBlogs = [
	{
		date: date1,
		title: "Kittens!",
		thumbnail: "http://via.placeholder.com/250x250",
		filters: ['animals', 'life'],
		body: text
	},
	{
		date: date2,
		title: "Doggies!",
		thumbnail: "http://via.placeholder.com/250x250",
		filters: ['cooking', 'animals'],
		body: text
	},
	{
		date: date3,
		title: "Bubbles!",
		thumbnail: "http://via.placeholder.com/250x250",
		filters: ['design', 'life'],
		body: text
	},
	{
		date: date4,
		title: "Bakery!",
		thumbnail: "http://via.placeholder.com/250x250",
		filters: ['cooking', 'design'],
		body: text
	},
	{
		date: date5,
		title: "Shapes!",
		thumbnail: "http://via.placeholder.com/250x250",
		filters: ['life', 'design'],
		body: text
	},
	{
		date: date1,
		title: "Shapes!",
		thumbnail: "http://via.placeholder.com/250x250",
		filters: ['life', 'design'],
		body: text
	},
	{
		date: date2,
		title: "Lizzards!",
		thumbnail: "http://via.placeholder.com/250x250",
		filters: ['animals', 'design'],
		body: text
	},
	{
		date: date3,
		title: "Music!",
		thumbnail: "http://via.placeholder.com/250x250",
		filters: ['life'],
		body: text
	},
	{
		date: date4,
		title: "Jungles!",
		thumbnail: "http://via.placeholder.com/250x250",
		filters: ['cooking', 'travel'],
		body: text
	},
	{
		date: date5,
		title: "Singing!",
		thumbnail: "http://via.placeholder.com/250x250",
		filters: ['life'],
		body: text
	},
	{
		date: date1,
		title: "Squares!",
		thumbnail: "http://via.placeholder.com/250x250",
		filters: ['design'],
		body: text
	},
	{
		date: date2,
		title: "Circles!",
		thumbnail: "http://via.placeholder.com/250x250",
		filters: ['design'],
		body: text
	},
	{
		date: date3,
		title: "Hypothetical Physics!",
		thumbnail: "http://via.placeholder.com/250x250",
		filters: ['life', 'design'],
		body: text
	},
	{
		date: date4,
		title: "Boombox!",
		thumbnail: "http://via.placeholder.com/250x250",
		filters: ['life', 'travel'],
		body: text
	},
	{
		date: date5,
		title: "Hats!",
		thumbnail: "http://via.placeholder.com/250x250",
		filters: ['life', 'design'],
		body: text
	}
];

module.exports = testBlogs;