const defaultState = {
	blogs: [],
	filters: [],
	blogModal: {
		title: "",
    date: "",
		body: "",
		thumbnail: ""
	},
	pages: 0,
	activePage: 1,
	blogsDisplay: [],
	filterButton: 'Filter Blog',
  notification: '',
  blogForm: {
    _id: '',
    title: '',
    body: '',
    filters: [],
    thumbnail: '',
  },
  showModal: false,
  searchToggle: false,
  searchIndex: null,
  searchResults: [],
  searchQuery: ''
};

export const blogs = (state = defaultState, action) => {
  switch(action.type) {
    case 'UPDATE_BLOG_ARRAY':
    	const blogs = action.payload;
    	return {
    		...state,
    		blogs
    	}
    case 'UPDATE_BLOG_MODAL':
    	const blogModal = action.payload;
    	return {
    		...state,
    		blogModal
    	}
    case 'UPDATE_PAGE_NUMBER':
    	const pages = action.payload;
    	return {
    		...state,
    		pages
    	}
    case 'UPDATE_BLOG_PAGE':
    	const activePage = action.payload;
    	return {
    		...state,
    		activePage
    	}
    case 'UPDATE_BLOG_DISPLAY':
    	const blogsDisplay = action.payload;
    	return {
    		...state,
    		blogsDisplay
    	}
    case 'UPDATE_FILTER_BUTTON':
    	const filterButton = action.payload;
    	return {
    		...state,
    		filterButton
    	}
    case 'UPDATE_FILTERS':
      const filters = action.payload;
      return {
        ...state,
        filters
      }
    case 'UPDATE_NOTIFICATION':
        const notification = action.payload;
        return {
            ...state,
            notification
        }
    case 'UPDATE_BLOG_FORM':
      const blogForm = action.payload;
      return {
        ...state,
        blogForm
      }
    case 'UPDATE_SHOW_MODAL':
      const showModal = action.payload;
      return {
        ...state,
        showModal
      }
    case 'UPDATE_SEARCH_INDEX':
      const searchIndex = action.payload;
      return {
        ...state,
        searchIndex
      }
    case 'UPDATE_SEARCH_RESULTS':
      const searchResults = action.payload;
      return {
        ...state,
        searchResults
      }
    case 'UPDATE_SEARCH_TOGGLE':
      const searchToggle = action.payload;
      return {
        ...state,
        searchToggle
      }
    case 'UPDATE_SEARCH_QUERY':
      const searchQuery = action.payload;
      return {
        ...state,
        searchQuery
      }
    default:
      return state;
  }
}
