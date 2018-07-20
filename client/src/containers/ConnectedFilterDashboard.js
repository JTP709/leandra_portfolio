import { connect } from 'react-redux';
import {
	getFilters
} from '../reducers/rootReducer';
import {
	newFilter,
	updateFilter,
	deleteFilter
} from '../actions/actionCreators';
import FilterDashboard from '../components/Admin/Blog/FilterDashboard';

const mapStateToProps = (state) => {
	const filters = getFilters(state);
	return {
		filters
	}
}

const mapDispatchToProps = {
	newFilter,
	updateFilter,
	deleteFilter
}

const ConnectedFilterDashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterDashboard)

export default ConnectedFilterDashboard;