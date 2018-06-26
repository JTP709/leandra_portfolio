import { connect } from 'react-redux';
import App from '../components/App';
import { addNewBlog, updateBlog, addFilter } from '../actions/actionCreators';

const mapStateToProps = (state) => {
	const { filters, blogs } = state;
	return {
		filters,
		blogs
	}
}

const mapDispatchToProps = {
	addNewBlog,
	updateBlog,
	addFilter
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default ConnectedApp;