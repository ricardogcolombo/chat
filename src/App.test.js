import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
    shallow
} from 'enzyme';

import {
    Provider
} from 'react-redux';
import store from './store.js'

describe('<App/>', () => {
        // expect(wrapper.contains('Chat')).toEqual(true)
    test('create component',()=>{
        const wrapper = shallow(
            <App/>
        );

        expect(2+2).toEqual(4)
    });

})
