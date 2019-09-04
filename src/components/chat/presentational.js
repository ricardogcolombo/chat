import React, {
    Component
} from 'react'
import proptypes from 'prop-types'
import moment from 'moment'
import Messages from '../messages/'
import MessageBox from '../message-box/'
import TypingMessage from '../typing-message/'
import styled, { css } from 'styled-components'

const SendButton = styled.button`
    margin-top:10px;
    width: 19%;
    background: url(https://api.iconify.design/fa-regular:paper-plane.svg?color=%23b6d7f4&width=20&height=20) no-repeat center center;
    vertical-align: -0.125em;
    height: 36px;
    border: none;
    background-color: #4e7ea8;
`

const ChatWindow = styled.div`
    background:url(/background.jpg?) center center;
    height: 100%;
    max-height: 550px;
    min-height: 550px;
    overflow: scroll;
    padding-bottom: 10px;
    padding-top: 10px;
    width: 100%;;
    width: 100%;
    margin: auto;
`

const ChatApp = styled.div`
    padding: 10px;
    padding-top: 0;
    width: 100%;
    height: 100%;
    position: relative;

`

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
                <div className='chat-title'> {from}
                <TypingMessage to={to} currentMessage={currentMessage}/>
            </div>
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
