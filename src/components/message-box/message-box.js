import React from 'react'
import {
    debounce
} from 'lodash'

class MessageBox extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.isTypingTimeout = null;
    }

    onChange(event) {
        const {
            writtingMessage,
            from,
            inputValue,
            setIsTyping
        } = this.props;

        // send to the other user the typing flag
        writtingMessage(event.target.value, from)
        setIsTyping(from, true)
        // if a timeout is set clean it 
        if (this.isTypingTimeout) clearTimeout(this.isTypingTimeout)

        // set a timeout to delete the typing message
        this.isTypingTimeout = setTimeout(() => {
            setIsTyping(from, false)
        }, 5000)
    }
    render() {
        const {
            inputValue
        } = this.props

        return <input value={inputValue.message} className='message-input' onChange={event=>this.onChange(event)}/>
    }
}
MessageBox.defaultProps = {
    inputValue: {
        message: ''
    }
}
export default MessageBox
