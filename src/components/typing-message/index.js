import React from 'react'
import './typing-message.scss'

const TypingMessage = ({
    currentMessage,
    to
}) => !!(currentMessage[to] && currentMessage[to].isTyping) && <div className='typing-message'>{to} is typing...</div>

export default TypingMessage
