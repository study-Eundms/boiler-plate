import {combineReducers}from 'redux';//reducer가 여러개 있을 수 있음. root reducer에서 하나로 합쳐서 사용하기 위해
import user from './user_reducer';
import comment from './comment_reducer';

const rootReducer=combineReducers({
    // user, comment 
})
export default rootReducer;