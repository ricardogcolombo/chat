import {
    connect
} from 'react-redux';
import Chat from './presentational'

import {
    writtingMessage,
    newMessage,
    setIsTyping
} from '../../actions/messages'

const mapStateToProps = function({
    msg,
    currentMessage
}) {
    return {
        messages: msg,
        currentMessage
    }
}

const mapDispatchToProps = {
    newMessage,
    writtingMessage,
    setIsTyping
}


export default connect(mapStateToProps, mapDispatchToProps)(Chat);
