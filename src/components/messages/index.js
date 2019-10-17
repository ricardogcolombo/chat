import React from 'react';
import Message from '../message-item'
import {MessageRow} from './style.js'

const Messages = ({
    messages,
    from
}) =>
    messages.map((data, index) =>
        <MessageRow key={index}>
            <Message {...{from,data}}/>
        </MessageRow>
    )

export default Messages


