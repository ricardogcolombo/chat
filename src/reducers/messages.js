import {
    NEW_MESSAGE
} from '../actions/messages'

const messagesReducer = function(state = [], action) {
    let newST = state.slice(0);
    switch (action.type) {
        case NEW_MESSAGE:
            let {from,message,time} = action
            let newMessage = {
                from: from,
                message: message,
                time: time
            };
            if(message && message.length>0){
                return newST.concat([newMessage])
            }else{
                return state
            }
        default:
            return state;
    }
}
export default messagesReducer;
