import React, {
    useState
} from 'react';
import {AppDiv,SecondaryChat} from './styled'

import Chat from './components/chat/'

export default function App(){
    const [ name,setName ]= useState('')
    const [register,setRegister]=useState('')

    const handleKeyDown=(event) =>{
        if (event.key === 'Enter' ) {
            setRegister(event.target.value)
        }
    }
    let chat= register?<Chat from={name}  to='laura' />:''
    return (
        <AppDiv>
            <SecondaryChat>
                <input value={name} onChange={e=>setName(e.target.value)} onKeyDown={e=>setName(e.target.value)}/>
                <button class="btn success" onClick={e=>setRegister(true)} >ENTER</button>
                {chat}
            </SecondaryChat>
        </AppDiv>
    )
}
