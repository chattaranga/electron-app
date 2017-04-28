import {combineReducers} from 'redux';
import userReducer from './user.reducer.js';
import levelsReducer from './levels.reducer.js';
import languagesReducer from './languages.reducer.js';
import badgesReducer from './badges.reducer.js';

export default combineReducers({
    user: userReducer,
    languages: languagesReducer,
    levels: levelsReducer,
    badges: badgesReducer
});