import { blogs } from './blog';
import { portfolio } from './portfolio';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	blogState: blogs,
	portfolioState: portfolio
});

export default rootReducer;
