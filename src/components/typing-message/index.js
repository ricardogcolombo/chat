import React from 'react'
import './typing-message.scss'

const TypingMessage = ({
    currentMessage,
    to
}) => !!(currentMessage[to] && currentMessage[to].isTyping) && <div className='typing-message'>{to} is Typing...</div>

export default TypingMessage
