import { connect } from 'react-redux';
import { push } from 'connected-react-router';
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
	updateBlogForm,
	push
}

const ConnectedAdmin = connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin)

export default ConnectedAdmin;