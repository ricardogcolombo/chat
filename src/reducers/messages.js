import {
    SEND_MESSAGE
} from '../actions/messages'

const messagesReducer = function(state = [], action) {
    let newST = state.slice(0);
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                from: action.from,
                message: action.message,
                time: action.time
            };

            return newST.concat([newMessage])

        default:
            return state;
    }
}
export default messagesReducer;
