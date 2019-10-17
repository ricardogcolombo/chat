import React from 'react'
import {StyledMessage,SenderName,SenderMessage} from './style.js';
import SenderTime from '../sender-time'
const Message = ({data,from}) =>
    <StyledMessage data={from===data.from?1:0}>
        <SenderTime>{data.time}</SenderTime>
        <SenderName>{data.from +":"}</SenderName>
        <SenderMessage>{data.message}</SenderMessage>
    </StyledMessage>

export default Message
