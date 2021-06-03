import { combineReducers } from 'redux';
import productReducer from './productReducer';

const rootReducers = combineReducers({
    allProducts: productReducer,
});

export default rootReducers;