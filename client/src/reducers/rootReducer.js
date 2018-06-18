import userSelectedReducer from './blogReducer';
import searchReducer from './filterReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	userSelected: userSelectedReducer,
	searchResult: searchReducer
});

export default rootReducer;
