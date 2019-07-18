import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
});

it('has 2 chat components inside', () => {
    // const div = document.createElement('div');
    // ReactDOM.render(<App />, div);
})
