const date1 = new Date('December 17, 1995 03:24:00');
const date2 = new Date('November 17, 1995 03:24:00');
const date3 = new Date('October 17, 1995 03:24:00');
const date4 = new Date('September 17, 1995 03:24:00');
const date5 = new Date('August 17, 1995 03:24:00');

const testBlogs = [
	{
		date: date1,
		title: "Kittens!",
		thumbnail: "http://via.placeholder.com/250x250",
		filter: ['animals', 'life'],
		blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
		"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
		"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris " +
		"nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in " +
		"reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla " +
		"pariatur. Excepteur sint occaecat cupidatat non proident, sunt in " +
		"culpa qui officia deserunt mollit anim id est laborum."
	},
	{
		date: date2,
		title: "Doggies!",
		thumbnail: "http://via.placeholder.com/250x250",
		filter: ['cooking', 'animals'],
		blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
		"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
		"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris " +
		"nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in " +
		"reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla " +
		"pariatur. Excepteur sint occaecat cupidatat non proident, sunt in " +
		"culpa qui officia deserunt mollit anim id est laborum."
	},
	{
		date: date3,
		title: "Bubbles!",
		thumbnail: "http://via.placeholder.com/250x250",
		filter: ['design', 'life'],
		blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
		"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
		"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris " +
		"nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in " +
		"reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla " +
		"pariatur. Excepteur sint occaecat cupidatat non proident, sunt in " +
		"culpa qui officia deserunt mollit anim id est laborum."
	},
	{
		date: date4,
		title: "Bakery!",
		thumbnail: "http://via.placeholder.com/250x250",
		filter: ['cooking', 'design'],
		blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
		"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
		"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris " +
		"nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in " +
		"reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla " +
		"pariatur. Excepteur sint occaecat cupidatat non proident, sunt in " +
		"culpa qui officia deserunt mollit anim id est laborum."
	},
	{
		date: date5,
		title: "Shapes!",
		thumbnail: "http://via.placeholder.com/250x250",
		filter: ['Life', 'design'],
		blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
		"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
		"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris " +
		"nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in " +
		"reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla " +
		"pariatur. Excepteur sint occaecat cupidatat non proident, sunt in " +
		"culpa qui officia deserunt mollit anim id est laborum."
	}
]

const testFilters = ['life','design','cooking','animals'];

export const testState = {
	blogs: testBlogs,
	filters: testFilters
}