import {
    WRITTING_MESSAGE
} from '../actions/messages'

const typingReducer = function(state = {}, action) {
    switch (action.type) {
        case WRITTING_MESSAGE:
            return {
                ...state,
                [action.from]: {
                    message: action.message,
                    isTyping: action.isTyping
                }
            }

        default:
            return state;
    }
}
export default typingReducer;
