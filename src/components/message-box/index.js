import React from 'react'
import styled from 'styled-components'

const MessageInput= styled.input`
    font-size:13px;
    outline: none;
    width: 79%;
    border: none;
    margin-right: 5px;
    font:12px/18px 'Open Sans',"Lucida Grande","Lucida Sans Unicode",Arial,Helvetica,Verdana,sans-serif;
    border-bottom:2px solid #b6d7f4;
`


class MessageBox extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.isTypingTimeout = null;
    }

    onChange(event) {
        const {
            writtingMessage,
            from,
            setIsTyping
        } = this.props;

        // send to the other user the typing flag
        writtingMessage(event.target.value, from)
        setIsTyping(from, true)
        // if a timeout is set clean it
        if (this.isTypingTimeout) clearTimeout(this.isTypingTimeout)

        // set a timeout to delete the typing message
        this.isTypingTimeout = setTimeout(() => {
            setIsTyping(from, false)
        }, 3000)
    }

    handleKeyDown(event) {
        const {
            onSubmit
        } = this.props

        if (event.key === 'Enter') {
            onSubmit()
        }
    }
    render() {
        const {
            inputValue
        } = this.props

        return <MessageInput placeholder='Write a message...' value={inputValue.message} className='message-input' onKeyDown={event=>this.handleKeyDown(event)} onChange={event=>this.onChange(event)}/>
    }
}
MessageBox.defaultProps = {
    inputValue: {
        message: ''
    }
}
export default MessageBox
