import {
  UPDATE_SEARCH,
  UPDATE_BLOG,
  UPDATE_FILTER,
  UPDATE_NOTIFICATION
} from '../constants'

const defaultState = {
  loading: false,
  error: null,
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
    case UPDATE_BLOG.ARRAY:
    	const { blogs } = action;
    	return {
    		...state,
    		blogs
      }
    case UPDATE_BLOG.LOADING_TRUE:
      return {
        ...state,
        loading: true
      }
      case UPDATE_BLOG.LOADING_FALSE:
        return {
          ...state,
          loading: false
        }
        case UPDATE_BLOG.ERROR:
        const error = action.error
          return {
            ...state,
            error
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
      const filters = action.payload;
      return {
        ...state,
        filters
      }
    case UPDATE_NOTIFICATION:
        const notification = action.payload;
        return {
            ...state,
            notification
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
    case UPDATE_SEARCH.INDEX:
      const searchIndex = action.payload;
      return {
        ...state,
        searchIndex
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
