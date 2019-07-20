import {
    connect
} from 'react-redux';
import Chat from './Chat'

import {
    sendMessage,
    writtingMessage,
    setIsTyping
} from '../../actions/messages'

import store from '../../store';

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
    sendMessage,
    writtingMessage,
    setIsTyping
}


export default connect(mapStateToProps, mapDispatchToProps)(Chat);
