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
            if(action.message.length>0){
                return newST.concat([newMessage])
            }else{
                return state
            }
        default:
            return state;
    }
}
export default messagesReducer;
