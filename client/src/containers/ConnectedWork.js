import { connect } from 'react-redux';
import Work from '../components/Work';

const mapStateToProps = (state) => {
	const { filters, blogs } = state;
	return {
		filters,
		blogs
	}
}

const ConnectedWork = connect(
  mapStateToProps
)(Work)

export default ConnectedWork;