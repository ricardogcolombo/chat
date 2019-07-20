import React from 'react'

const Messages = ({
        messages
    }) =>
    messages.map((data, index) =>
        <div key={index}> {data.from +":"+ data.message} </div>
    )

export default Messages
