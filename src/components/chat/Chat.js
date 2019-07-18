import React, {
    Component
} from 'react'


import {
    connect
} from 'react-redux';


import './Chat.scss'

class ChatContainer extends Component {

    render() {
        return (
            <div>
                <div className='chat'>
                    <div className='chat-window'>
                    </div>
                    <div className='chat-box'>
                        <input  className='message-input' />
                        <button className='send-button' >send</button>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = function(state) {
    return {
        config: {}
    };
}

export default connect(mapStateToProps)(ChatContainer);
