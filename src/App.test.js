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
    const wrapper = shallow(
        <Provider store={store}>
                <App/>
            </Provider>
    );
    expect(wrapper.contains('Chat')).toEqual(true)

})
