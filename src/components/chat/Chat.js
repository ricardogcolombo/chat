import React, {
	Component
} from 'react'


import {
	connect
} from 'react-redux';
import {
	sendMessage,
	writtingMessage
} from '../../actions/messages'
import store from '../../store';

import './Chat.scss'

class ChatContainer extends Component {
	state = store.getState()
	isTyping;
	value;
	onSubmitMessage() {
		// send message via state
		store.dispatch(sendMessage(this.value, this.props.from, this.props.to))
	}
	onChange(event) {
		const from = this.props.from

		this.value = event.target.value
		// send to the other user the typing flag
		store.dispatch(writtingMessage(true, from))

		// if a timeout is set clean it 
		if (this.isTyping) clearTimeout(this.isTyping)

		// set a timeout to delete the typing message
		this.isTyping = setTimeout(function() {
			store.dispatch(writtingMessage(false, from))
		}, 1000)
	}
	render() {
		let chatMessages, typingMessage;
		
		// create divs for messages
		if (this.props.messages) {
			chatMessages = this.props.messages.map((data, index) => {
				return (<div key={index}> {data.from +":"+ data.message} </div>)
			})
		}
		
		// set typing message with the flag
		if (!!this.props.value[this.props.to])
			typingMessage = (<div>{this.props.to} is Typing...</div>)

		return (
			<div>
                <div className='chat'>
                    <div className='chat-window'>
                        {chatMessages}
                    </div>
                    <div className='chat-box'>
                        {typingMessage}
                        <input className='message-input' onChange={this.onChange.bind(this)} />
                        <button className='send-button' onClick={this.onSubmitMessage.bind(this)} >send</button>
                    </div>
                </div>
            </div>
		)
	}
}


const mapStateToProps = function(state) {
	return {
		messages: state.msg,
		value: state.value
	}
}

export default connect(mapStateToProps)(ChatContainer);
