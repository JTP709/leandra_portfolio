import { connect } from 'react-redux';
import {
	getShowModal,
	getBlogModal
} from '../reducers/rootReducer';
import {
	updateShowModal
} from '../actions/actionCreators';
import BlogModal from '../components/BlogModal';

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