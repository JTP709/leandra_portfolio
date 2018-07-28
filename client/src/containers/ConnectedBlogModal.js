import { connect } from 'react-redux';
import {
	getShowModal,
	getBlogModal,
	updateShowModal
} from 'site-redux';
import BlogModal from '../components/Blog/BlogModal';

const mapStateToProps = (state) => {
	const showModal = getShowModal(state);
	const blogModal = getBlogModal(state);
	return {
		showModal,
		blogModal
	}
}

const mapDispatchToProps = {
	updateShowModal
}

const ConnectedBlogModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogModal)

export default ConnectedBlogModal;