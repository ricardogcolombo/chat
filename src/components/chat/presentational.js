import React, {
    Component
} from 'react'
import proptypes from 'prop-types'
import './chat.scss'
import moment from 'moment'
import Messages from '../messages/'
import MessageBox from '../message-box/'
import TypingMessage from '../typing-message/'


const onSubmitMessage = (
    sendMessage,
    currentMessage,
    from,
    to,
    writtingMessage,
    time
) => {
    sendMessage(currentMessage, from, to, time)
    writtingMessage('', from)
}

class Chat extends Component {
    render() {

        const {
            messages,
            to,
            currentMessage,
            from,
            sendMessage,
            writtingMessage,
            setIsTyping
        } = this.props;

        return (
            <div className='chat'>
                <div className='chat-window'>
                    <Messages messages={messages}/>
                </div>
                <div className='chat-box'>
                    <TypingMessage to={to} currentMessage={currentMessage}/>
                    <MessageBox  setIsTyping={setIsTyping} onSubmit={()=>onSubmitMessage(sendMessage,currentMessage[from].message,from,to,writtingMessage,moment().format('HH:mm'))} inputValue={currentMessage[from]} writtingMessage={writtingMessage} from={from} />
                    <button className='send-button' onClick={()=>onSubmitMessage(sendMessage,currentMessage[from].message,from,to,writtingMessage,moment().format('HH:mm'))} ></button>
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
