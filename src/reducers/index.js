import {
    combineReducers
} from 'redux';
import messagesReducer from './messages'
import typingReducer from './typing'

const rootReducer = combineReducers({
    msg: messagesReducer,
    value:typingReducer
});

export default rootReducer;
