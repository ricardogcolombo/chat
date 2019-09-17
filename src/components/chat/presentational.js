import React, {
    Component,
    useReducer
} from 'react'

import proptypes from 'prop-types'
import moment from 'moment'
import Messages from '../messages/'
import MessageBox from '../message-box/'
import TypingMessage from '../typing-message/'

import {SendButton,ChatWindow,ChatApp,ChatTitle} from './style.js';

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
    constructor(props){
        super(props)
        this.messagesEnd = null
        this.scrollToBottom=this.scrollToBottom.bind(this)
    }
    scrollToBottom(){
        this.messagesEnd.scrollIntoView()
    }
    componentDidMount(){
        if(this.messagesEnd){
            this.scrollToBottom()
        }
    }
    componentDidUpdate(){
        if( this.messagesEnd){
            this.scrollToBottom()
        }
    }
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
            <ChatApp>
                <ChatTitle> {from}
                <TypingMessage to={to} currentMessage={currentMessage}/>
            </ChatTitle>
            <ChatWindow>
                <Messages messages={messages} from={from}/>
                <div  style={{ float:"left", clear: "both" }} ref={e=> this.messagesEnd = e}></div>
            </ChatWindow >
            <div className='chat-box'>
                <MessageBox  setIsTyping={setIsTyping} onSubmit={()=>onSubmitMessage(sendMessage,currentMessage[from].message,from,to,writtingMessage,moment().format('HH:mm A'))} inputValue={currentMessage[from]} writtingMessage={writtingMessage} from={from} />
                <SendButton onClick={()=>onSubmitMessage(sendMessage,currentMessage[from].message,from,to,writtingMessage,moment().format('HH:mm A'))} />
            </div>
        </ChatApp>
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
