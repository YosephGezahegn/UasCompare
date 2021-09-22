import { combineReducers } from 'redux';
import univReducer from './univeReducer';



const rootReducer = combineReducers({
	univeList: univReducer,
});
export default rootReducer;
