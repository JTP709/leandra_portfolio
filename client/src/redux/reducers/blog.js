import {
  UPDATE_SEARCH,
  UPDATE_BLOG,
  UPDATE_FILTER,
} from '../constants'

const defaultState = {
  loading: {
    blogs: false,
    filters: false
  },
  error: {
    blogs: null,
    filters: null
  },
	blogs: [],
	filters: [],
	blogModal: {
		title: '',
    date: '',
		body: '',
    thumbnail: '',
    header_img: '',
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
    header_img: '',
  },
  showModal: false,
  searchToggle: false,
  searchIndex: null,
  searchResults: [],
  searchQuery: ''
};

export const blogs = (state = defaultState, action) => {
  switch(action.type) {
    case UPDATE_BLOG.ARRAY:
    	return {
        ...state,
        searchIndex: action.payload.index,
        blogs: action.payload.blogs,
        loading: {
          ...state.loading,
          blogs: false
        }
      }
    case UPDATE_BLOG.LOADING_TRUE:
      return {
        ...state,
        loading: {
          ...state.loading,
          blogs: true
        },
        notification: action.notification
      }
    case UPDATE_BLOG.ERROR:
      return {
        ...state,
        error: {
          ...state.error,
          blogs: action.error
        }
      }
    case UPDATE_BLOG.MODAL:
    	const blogModal = action.payload;
    	return {
    		...state,
    		blogModal
    	}
    case UPDATE_BLOG.PAGE_NUMBER:
    	const pages = action.payload;
    	return {
    		...state,
    		pages
    	}
    case UPDATE_BLOG.PAGE:
    	const activePage = action.payload;
    	return {
    		...state,
    		activePage
    	}
    case UPDATE_BLOG.DISPLAY:
    	const blogsDisplay = action.payload;
    	return {
    		...state,
    		blogsDisplay
    	}
    case UPDATE_FILTER.FILTER_BUTTON:
    	const filterButton = action.payload;
    	return {
    		...state,
    		filterButton
    	}
    case UPDATE_FILTER.FILTERS:
      return {
        ...state,
        filters: action.payload,
        loading: {
          ...state.loading,
          filters: false
        }
      }
    case UPDATE_FILTER.LOADING_TRUE:
      return {
        ...state,
        loading: {
          ...state.loading,
          filters: true,
        }
      }
    case UPDATE_FILTER.ERROR:
      return {
        ...state,
        error: {
          ...state.error,
          filters: action.error
        }
      }
    case UPDATE_BLOG.FORM:
      const blogForm = action.payload;
      return {
        ...state,
        blogForm
      }
    case UPDATE_BLOG.SHOW_MODAL_TRUE:
      return {
        ...state,
        showModal: true
      }
    case UPDATE_BLOG.SHOW_MODAL_FALSE:
      return {
        ...state,
        showModal: false
      }
    case UPDATE_SEARCH.RESULTS:
      const searchResults = action.payload;
      return {
        ...state,
        searchResults
      }
    case UPDATE_SEARCH.TOGGLE_TRUE:
      return {
        ...state,
        searchToggle: true
      }
    case UPDATE_SEARCH.TOGGLE_FALSE:
      return {
        ...state,
        searchToggle: false
      }
    case UPDATE_SEARCH.QUERY:
      const searchQuery = action.payload;
      return {
        ...state,
        searchQuery
      }
    default:
      return state;
  }
}
