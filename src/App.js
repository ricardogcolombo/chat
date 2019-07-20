import React, {
    Component
} from 'react';

import './App.scss';
import Chat from './components/chat/Chat.js'
class App extends Component {

    render() {
        return (
            <div className="App">
            <div>
                Laura
                <Chat from='laura' to='rob' className='MainChat' />
            </div>
            <div>
                Rob
            <Chat from='rob'  to='laura' className='SecondaryChat'/>
            </div>
        </div>
        )
    }
}

export default App
