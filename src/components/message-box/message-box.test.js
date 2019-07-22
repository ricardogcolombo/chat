import React from 'react'

import {
    shallow
} from 'enzyme'
import MessageBox from './'


const createOne = (props = {
    inputValue: {message:'test'}
}) => {
    const component = shallow(<MessageBox {...props}/>)
    return component
}

describe('MesageBox Component', () => {
    let component;

    beforeEach(() => {
        component = createOne()
    })

    it('Should Render',()=>{
        expect(component.length).toBe(1)
    })

    it('Input Field should have a vaue',()=>{
        const input = component.find('input')
        expect(input.prop('value')).toBe('test')
    })
});
