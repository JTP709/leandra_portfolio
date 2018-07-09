const defaultState = {
	blogs: [],
	blogFilters: ['life','design','cooking','animals', 'travel'],
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
  showModal: false
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
    default:
      return state;
  }
}
