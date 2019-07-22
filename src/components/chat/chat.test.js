import React from 'react'

import {
    shallow
} from 'enzyme'

import {
    Provider
} from 'react-redux';
import Chat from './'
const initialState = {};
import store from '../../store'

const createOne = (props = {
    from: 'laura',
    to: 'rob'
}) => {


    return shallow(
        <Provider store={store}>
            <Chat {...props}/>
        </Provider>
    )
}

describe('Chat Component', () => {
    let component;

    beforeEach(() => {
        component = createOne()
    })

    it('Should Render', () => {
        expect(component.length).toBe(1)
    })
});
