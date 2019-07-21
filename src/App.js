import React, {
    Component
} from 'react';

import './App.scss';
import Chat from './components/chat/'
class App extends Component {

    render() {
        return (
            <div className="App">
                <div className='MainChat'>
                    <div className='chat-title'> Laura's Screen</div>
                    <Chat from='laura' to='rob'  />
                </div>
                <div className='SecondaryChat'>
                    <div className='chat-title'> Rob's Screen </div>
                    <Chat from='rob'  to='laura' />
            </div>
        </div>
        )
    }
}

export default App
