import React, {
    Component
} from 'react';
import {AppDiv,SecondaryChat} from './styled'

import Chat from './components/chat/'

class App extends Component {
    render() {
        return (
            <AppDiv>
                <SecondaryChat>
                    <Chat from='rob'  to='laura' />
                </SecondaryChat>
            </AppDiv>
        )
    }
}

export default App
