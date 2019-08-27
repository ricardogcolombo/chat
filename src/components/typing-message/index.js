import React from 'react'
import styled from 'styled-components'
// import './typing-message.scss'
const TypingmessageComponent = styled.div`
    font:11px/18px 'Open Sans',"Lucida Grande","Lucida Sans Unicode",Arial,Helvetica,Verdana,sans-serif;
    color: white;
    position: absolute;
    width: 100%;
    padding-top: 5px;
    margin: 0;
`
const TypingMessage = ({
    currentMessage,
    to
}) => !!(currentMessage[to] && currentMessage[to].isTyping) && <TypingmessageComponent>{to} is typing...</TypingmessageComponent>

export default TypingMessage
