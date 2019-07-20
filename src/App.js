import React, {
    Component
} from 'react';

import './App.scss';
import Chat from './components/chat/'
class App extends Component {

    render() {
        return (
            <div className="App">
            <div>
                Laura
                <Chat from='laura' to='rob'  />
            </div>
            <div>
                Rob
            <Chat from='rob'  to='laura' />
            </div>
        </div>
        )
    }
}

export default App
