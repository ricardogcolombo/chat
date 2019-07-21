import React from 'react';
import './messages.scss';

const Messages = ({
        messages
    }) =>
    messages.map((data, index) =>
        <div className='message-row' key={index}> 
            <div className='sender-name'>{data.from +":"}</div>
            <div className='sender-message'> { data.message} </div>
        </div>
    )

export default Messages
