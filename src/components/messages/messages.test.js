import React from 'react'

import {
    shallow
} from 'enzyme'
import Messages from './'
import moment from 'moment'

const mockdata = [{
    from: 'ric',
    message: 'hola',
    time: '23:22'
}]
const createOne = (props = {
    messages: mockdata
}) => {
    const component = shallow(<Messages {...props}/>)
    return component
}

describe('Messages Component', () => {
    let component;

    beforeEach(() => {
        component = createOne()
    })

    it('Should Render', () => {
        const messageWrapper = component.find('.message-row')
        expect(messageWrapper.length).toBe(1)
    })


    it('Should the time in the message',()=>{
        const senderTime = component.find('.sender-time')
        expect(senderTime.length).toBe(1)
        expect(senderTime.text()).toBe('23:22')
    })

    it('Should have the sender name',()=>{
        const senderName=  component.find('.sender-name')
        expect(senderName.length).toBe(1)
        expect(senderName.text()).toBe('ric:')
    })

    it('Should have the message',()=>{
        const senderMessage=  component.find('.sender-message')
        expect(senderMessage.length).toBe(1)
        expect(senderMessage.text()).toBe('hola')

    });

})
describe('Without Messages', () => {
    const component = shallow(<Messages messages={[]}/>)

    it('Should not render',()=>{
        const messageWrapper = component.find('.message-row')
        expect(messageWrapper.length).toBe(0)
    })
});
