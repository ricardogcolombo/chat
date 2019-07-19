import React, {
    Component
} from 'react'


import {
    connect
} from 'react-redux';
import {
    sendMessage
} from '../../actions/messages'
import store from '../../store';

import './Chat.scss'

const initialState = {
    messages: []
}
class ChatContainer extends Component {
    constructor(props) {
        super(props)
        this.state = initialState
    }
    onSubmitMessage() {
        store.dispatch(sendMessage(this.value, this.props.from, this.props.to))
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        this.setState(nextProps.messages)
    }
    onChange(event) {
        this.value = event.target.value;
    }
    render() {
        let chatMessages;

        if (this.state) {
            chatMessages = this.state.messages.map((data, index) => {
                return (<div key={index}> {data.from +":"+ data.message} </div>)
            })
        }
        return (
            <div>
                <div className='chat'>
                    <div className='chat-window'>
                        {chatMessages}
                    </div>
                    <div className='chat-box'>
                        <input className='message-input' value={this.props.value} onChange={this.onChange.bind(this)} />
                        <button className='send-button' onClick={this.onSubmitMessage.bind(this)} >send</button>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = function(state) {
    return {
        messages: state
    }
}

export default connect(mapStateToProps)(ChatContainer);
