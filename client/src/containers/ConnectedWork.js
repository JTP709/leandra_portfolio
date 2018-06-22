import { connect } from 'react-redux';
import { getBlogs } from '../reducers/blogReducer';
import { getFilters } from '../reducers/filterReducer';
import Work from '../components/Work';

const mapStateToProps = (state) => {
	return {
		filters: getFilters(state),
		blogs: getBlogs(state)
	}
}

const ConnectedWork = connect(
  mapStateToProps
)(Work)

export default ConnectedWork;