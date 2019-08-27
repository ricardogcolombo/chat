import React, {
    Component
} from 'react'
import proptypes from 'prop-types'
import './chat.scss'
import moment from 'moment'
import Messages from '../messages/'
import MessageBox from '../message-box/'
import TypingMessage from '../typing-message/'
import styled, { css } from 'styled-components'

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
            <div className='chat'>
                <div className='chat-title'> {from}
                <TypingMessage to={to} currentMessage={currentMessage}/>
            </div>
            <div className='chat-window'>
                <Messages messages={messages} from={from}/>
                <div  style={{ float:"left", clear: "both" }} ref={e=> this.messagesEnd = e}></div>
            </div>
            <div className='chat-box'>
                <MessageBox  setIsTyping={setIsTyping} onSubmit={()=>onSubmitMessage(sendMessage,currentMessage[from].message,from,to,writtingMessage,moment().format('HH:mm A'))} inputValue={currentMessage[from]} writtingMessage={writtingMessage} from={from} />
                <button className='send-button' onClick={()=>onSubmitMessage(sendMessage,currentMessage[from].message,from,to,writtingMessage,moment().format('HH:mm A'))} ></button>
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
