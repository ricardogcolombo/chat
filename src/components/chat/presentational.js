import React, {Component} from 'react'

import proptypes from 'prop-types'
import moment from 'moment'
import Messages from '../messages/'
import MessageBox from '../message-box/'
import TypingMessage from '../typing-message/'

import {ChatWindow,ChatApp,ChatTitle} from './style.js';
import io from 'socket.io-client';


export const socket = io.connect('http://localhost:8000');

const onSubmitMessage = (
    message,
    from,
    to
) => {
    let time=moment().format('HH:mm A')
    socket.emit('NEW_MESSAGE',
        {
            message,
            from,
            to,
            time
        })
}


class Chat extends Component {
    constructor(props){
        super(props)
        this.messagesEnd = null
        this.scrollToBottom=this.scrollToBottom.bind(this)
        socket.emit('REGISTER',props.from)
        socket.on('UPDATE_MESSAGES', state=>{
            this.props.newMessage(state)
        } );
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
            <MessageBox  setIsTyping={setIsTyping} onSubmit={(currentMessage)=>onSubmitMessage(currentMessage,from,to)} from={from} />
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
