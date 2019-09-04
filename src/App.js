import React, {
    Component
} from 'react';
import styled from 'styled-components'

import Chat from './components/chat/'
const MainChat= styled.div`
    float: left;
    width: 45%;
    height: 100%;
    position: relative;
    padding: 20px;
    padding-right:35px;
    margin-right:5px;
`
const SecondaryChat= styled.div`
    padding: 20px;
    width: 45%;
    height: 100%;
    position: relative;
    float: left;
`

const AppDiv= styled.div`
    width: 80%;
    min-height: 500px;
    min-width:1060px;
    overflow:auto;
    margin: auto;
    padding: 10px;
`
class App extends Component {
    render() {
        return (
            <AppDiv >
                <MainChat>
                    <Chat from='laura' to='rob'  />
                </MainChat>
                <SecondaryChat>
                    <Chat from='rob'  to='laura' />
                </SecondaryChat>
            </AppDiv>
        )
    }
}

export default App
