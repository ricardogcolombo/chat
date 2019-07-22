import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {
    shallow
} from 'enzyme'
import {
    Provider
} from 'react-redux'
import store from './store.js'

const createOne = (props = {}) => {
    return shallow(
        <Provider store={store}>
            <App/>
        </Provider>
    )
}


describe('<App/>', () => {
    let component;

    beforeEach(() => {
        component = createOne()
    })

    test('create component', () => {
        expect(component.length).toEqual(1)
    });
})
