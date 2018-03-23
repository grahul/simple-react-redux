import { combineReducers } from 'redux';
import home from './homeReducer';
import news from './newsReducer';

export default combineReducers({
    home,
    news
});