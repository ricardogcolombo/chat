import React ,{useState} from 'react'

import {MessageInput,SendButton} from './styled.js'

export default function MessageBox(props){
    const [value,setValue]=useState('')

    let isTypingTimeout=null;
    const onChange=(event) =>{
        const {
            writtingMessage,
            from,
            setIsTyping
        } = props;

        // send to the other user the typing flag
        setValue(event.target.value)
        setIsTyping(from, true)
        // if a timeout is set clean it
        if (isTypingTimeout) clearTimeout(isTypingTimeout)

        // set a timeout to delete the typing message
        isTypingTimeout = setTimeout(() => {
            setIsTyping(from, false)
        }, 3000)
    }

    const handleKeyDown=(event) =>{
        const {
            onSubmit
        } = props
        if (event.key === 'Enter' || event.type==='click') {
            onSubmit(value)
        }else{
            setValue(event.target.value)
        }
    }
    return <div><MessageInput
            placeholder='Write a message...'
            value={value}
            className='message-input'
            onKeyDown={event=>handleKeyDown(event)}
            onChange={event=>onChange(event)}/>
        <SendButton onClick={(event)=>handleKeyDown(event)} />
    </div>
}
