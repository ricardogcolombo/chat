import React, {
    Component
} from 'react'
import proptypes from 'prop-types'
import './Chat.scss'

import Messages from '../Messages/Messages'
import MessageBox from '../message-box/message-box'
import TypingMessage from '../typing-message/typing-message'


const onSubmitMessage = (
    sendMessage,
    currentMessage,
    from,
    to,
    writtingMessage
) => {
    sendMessage(currentMessage, from, to)
    writtingMessage('', from)
}

class Chat extends Component {
    render() {

        const {
            messages,
            to,
            // inputValue,
            currentMessage,
            from,
            sendMessage,
            writtingMessage
        } = this.props;



        return (
            <div>
                <div className='chat'>
                    <div className='chat-window'>
                        <Messages messages={messages}/>
                    </div>
                    <div className='chat-box'>
                        <TypingMessage to={to} currentMessage={currentMessage}/>
                        <MessageBox  writtingMessage={writtingMessage} from={from} />
                        <button className='send-button' onClick={()=>onSubmitMessage(sendMessage,currentMessage[from].message,from,to,writtingMessage)} >send</button>
                    </div>
                </div>
            </div>
        )
    }
}

Chat.propTypes = {
    messages: proptypes.array.isRequired,
    currentMessage: proptypes.object.isRequired
}

Chat.defaultProps = {
    messages: [],
    currentMessage: {}
}

export default Chat;
