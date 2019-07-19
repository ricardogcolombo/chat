import {
    SEND_MESSAGE
} from '../actions/messages'

const messagesReducer = function(state = [], action) {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                from: action.from,
                message: action.message
            };

            return state.concat([newMessage])

        default:
            return state;
    }
}
export default messagesReducer;

