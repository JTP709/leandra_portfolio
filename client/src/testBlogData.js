const date1 = new Date('December 17, 1995 03:24:00');
const date2 = new Date('November 17, 1995 03:24:00');
const date3 = new Date('October 17, 1995 03:24:00');
const date4 = new Date('September 17, 1995 03:24:00');
const date5 = new Date('August 17, 1995 03:24:00');
const date6 = new Date('July 17, 1995 03:24:00');
const date7 = new Date('June 17, 1995 03:24:00');
const date8 = new Date('May 17, 1995 03:24:00');
const date9 = new Date('April 17, 1995 03:24:00');
const date10 = new Date('March 17, 1995 03:24:00');
const date11 = new Date('February 17, 1995 03:24:00');
const date12 = new Date('January 17, 1995 03:24:00');
const date13 = new Date('December 17, 1994 03:24:00');
const date14 = new Date('November 17, 1994 03:24:00');
const date15 = new Date('October 17, 1994 03:24:00');

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
		date: date6,
		title: "Shapes!",
		thumbnail: "http://via.placeholder.com/250x250",
		filters: ['life', 'design'],
		body: text
	},
	{
		date: date7,
		title: "Lizzards!",
		thumbnail: "http://via.placeholder.com/250x250",
		filters: ['animals', 'design'],
		body: text
	},
	{
		date: date8,
		title: "Music!",
		thumbnail: "http://via.placeholder.com/250x250",
		filters: ['life'],
		body: text
	},
	{
		date: date9,
		title: "Jungles!",
		thumbnail: "http://via.placeholder.com/250x250",
		filters: ['cooking', 'travel'],
		body: text
	},
	{
		date: date10,
		title: "Singing!",
		thumbnail: "http://via.placeholder.com/250x250",
		filters: ['life'],
		body: text
	},
	{
		date: date11,
		title: "Squares!",
		thumbnail: "http://via.placeholder.com/250x250",
		filters: ['design'],
		body: text
	},
	{
		date: date12,
		title: "Circles!",
		thumbnail: "http://via.placeholder.com/250x250",
		filters: ['design'],
		body: text
	},
	{
		date: date13,
		title: "Hypothetical Physics!",
		thumbnail: "http://via.placeholder.com/250x250",
		filters: ['life', 'design'],
		body: text
	},
	{
		date: date14,
		title: "Boombox!",
		thumbnail: "http://via.placeholder.com/250x250",
		filters: ['life', 'travel'],
		body: text
	},
	{
		date: date15,
		title: "Hats!",
		thumbnail: "http://via.placeholder.com/250x250",
		filters: ['life', 'design'],
		body: text
	}
];

module.exports = testBlogs;