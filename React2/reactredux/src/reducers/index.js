import {combineReducers} from 'redux';
import counterReducer from './counterReducer';
import auth from './loginLogout';
const rootReducer = combineReducers({
    counter:counterReducer,
    auth : auth
})

export default rootReducer;