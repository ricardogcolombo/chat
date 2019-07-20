import {
    WRITTING_MESSAGE
} from '../actions/messages'

const typingReducer = function(state = {
}, action) {
    let newST = Object.assign({}, state)
    switch (action.type) {
        case WRITTING_MESSAGE:
            newST[action.from] = action.message
            return newST

        default:
            return state;
    }
}
export default typingReducer;
