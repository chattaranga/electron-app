import {combineReducers} from 'redux';
import userReducer from './user.reducer.js';
import levelsReducer from './levels.reducer.js';

export default combineReducers({
    user: userReducer,
    levels: levelsReducer
});