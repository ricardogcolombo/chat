import React from 'react';
import {MessageRow,SenderName,SenderMessage,SenderTime,Message} from './style.js'
const Messages = ({
    messages,
    from
}) =>
    messages.map((data, index) =>
        <MessageRow key={index}>
            <Message data={from===data.from?1:0}>
                <SenderTime>{data.time}</SenderTime>
                <SenderName>{data.from +":"}</SenderName>
                <SenderMessage>{data.message}</SenderMessage>
            </Message>
        </MessageRow>
    )

export default Messages


