import React from 'react'
import {debounce} from 'lodash'

class MessageBox extends React.Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
    }
    
    onChange(event) {
        const {
            writtingMessage,
            from
        } = this.props,
        inputValue = event.target.value;
        // send to the other user the typing flag
        writtingMessage(inputValue, from, true)

        // if a timeout is set clean it 
        // if (isTypingTimeout) clearTimeout(isTypingTimeout)

        // // set a timeout to delete the typing message
        setTimeout(() => {
            writtingMessage(inputValue, from, false)
        }, 8000)
    }
    render() {

        return <input className='message-input' onChange={event=>this.onChange(event)}/>

    }

}

export default MessageBox
