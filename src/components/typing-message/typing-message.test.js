import React from 'react'

import {
    shallow
} from 'enzyme'
import TypingMessage from './'

const mockdata = {
    ric: {
        isTyping: true
    }
}
const createOne = (props = {
    currentMessage: mockdata,
    to: 'ric'
}) => {
    const component = shallow(<TypingMessage {...props}/>)
    return component
}

describe('Typing Message Component', () => {
    let component;

    beforeEach(() => {
        component = createOne()
    })

    it('Should Render', () => {
        const wrapper = component.find('.typing-message')
        expect(wrapper.length).toBe(1)
    })


    it('Should have the name of the user', () => {
        const wrapper = component.find('.typing-message')
        expect(wrapper.text()).toBe('ric is typing...')
    })
})

describe('Typing Message should not Render', () => {

    it('Should not Render', () => {
        const component = shallow( < TypingMessage currentMessage={{
                ric: {
                    isTyping: false
                }
            }}
            to = 'ric' / > )
        const wrapper = component.find('.typing-message')
        expect(wrapper.length).toBe(0)
    });
})
