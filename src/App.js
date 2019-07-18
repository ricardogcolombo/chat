import React, {
    Component
} from 'react';

import {
    connect
} from 'react-redux';

import './App.scss';
import Chat from './components/chat/Chat.js'

const initialState = {
    messages: {}
}
class App extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }
    render() {
        return (
            <div className="App">
            <div>
                Laura
                <Chat userid='laura' className='MainChat' />
            </div>
            <div>
                Rob
            <Chat userid='rob'  className='SecondaryChat'/>
            </div>
        </div>
        )
    }
}
const mapStateToProps = function(state) {
    return { };
}

export default connect(mapStateToProps)(App);
