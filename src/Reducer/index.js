import Counter from "./Counter";
import {combineReducers} from 'redux'
const allReducer=combineReducers({
    Counter:Counter
})
export default allReducer