import React from 'react'

const TypingMessage = ({
    currentMessage,
    to
}) => !!(currentMessage[to] && currentMessage[to].isTyping) && <div>{to} is Typing...</div>

export default TypingMessage
