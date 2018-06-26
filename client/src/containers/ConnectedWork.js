import { connect } from 'react-redux';
import { getBlogs } from '../reducers/blogReducer';
import { getFilters } from '../reducers/filterReducer';
import { fetchBlogs } from '../actions/actionCreators';
import Work from '../components/Work';

const mapStateToProps = (state) => {
	return {
		filters: getFilters(state),
		blogs: getBlogs(state)
	}
}

const mapDispatchToProps = {
	fetchBlogs
}

const ConnectedWork = connect(
  mapStateToProps,
  mapDispatchToProps
)(Work)

export default ConnectedWork;