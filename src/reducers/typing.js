import {
    WRITTING_MESSAGE,
    IS_TYPING
} from '../actions/messages'

const typingReducer = function(state = {}, action) {
    switch (action.type) {
        case WRITTING_MESSAGE:
            return {
                ...state,
                [action.from]: {
                    ...state[action.from],
                    message: action.message,
                }
            }
        case IS_TYPING:
            return {
                ...state,
                [action.from]: {
                    ...state[action.from],
                    isTyping: action.isTyping,
                }
            }
        default:
            return state;
    }
}
export default typingReducer;
