import { connect } from 'react-redux';
import {
	getBlogs,
	getNotification,
	getPathname,
	updateBlogForm
} from 'site-redux';
import Admin from '../components/Admin/Admin';

const mapStateToProps = (state) => {
	const blogs = getBlogs(state);
	const notification = getNotification(state);
	const pathname = getPathname(state);
	return {
		blogs,
		notification,
		pathname
	}
}

const mapDispatchToProps = {
	updateBlogForm
}

const ConnectedAdmin = connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin)

export default ConnectedAdmin;