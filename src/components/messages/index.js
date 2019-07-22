import React from 'react';
import './messages.scss';

const Messages = ({
    messages,
    from
}) =>
    messages.map((data, index) =>
        <div className='message-row' key={index}>
            <div className={(from===data.from?' sender':' receiver')}>
                <div className='sender-time'>{data.time}</div>
                <div className='sender-name'>{data.from +":"}</div>
                <div className='sender-message'>{data.message}</div>
            </div>
        </div>
    )

export default Messages
