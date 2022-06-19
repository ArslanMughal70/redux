import { combineReducers } from "redux";
import UpDown from '../reducers/UpDown';
const reducers=combineReducers({
    amount:UpDown
})
export default reducers