import { testState } from '../testState';
import { UPDATE_FILTER } from '../constants';

const defaultState = { 
	...testState,
	filterButton: 'Filter Blog'
};

export const filters = (state = defaultState.filters, action) => {
  switch(action.type) {
    case UPDATE_FILTER.FILTER_BUTTON:
    	const filterButton = action.payload;
    	return {
    		...state,
    		filterButton
    	}
    default:
      return state;
  }
}
