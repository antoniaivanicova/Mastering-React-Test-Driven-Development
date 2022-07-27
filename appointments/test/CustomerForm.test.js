import React from 'react'
import {createContainer} from './domManipulators'
import {CustomerForm} from '../src/CustomerForm'

const expectToBeInputFieldOfTypeText = formElement => {
    expect(formElement).not.toBeNull()
    expect(formElement.tagName).toEqual('INPUT')
    expect(formElement.type).toEqual('text')
}

describe('CustomerForm', () => {
    let render, container

    beforeEach(() => {
        ({ render, container} = createContainer())
    })

    const form = id => container.querySelector(`form[id="${id}"]`)
    const firstNameField = () => form('customer').elements.firstName

    it('should render a form', function () {
        render(<CustomerForm/>)
        expect(form('customer')).not.toBeNull()
    });

    it('should render the customers first name as a text box', function () {
        render(<CustomerForm/>)
        const field =

            expectToBeInputFieldOfTypeText(field)
    });

    it('should include the existing value for the first name', function () {
        render(<CustomerForm firstName="Ashley"/>)
        const field = form('customer').elements.firstName
        expect(field.value).toEqual('Ashley')
    });
})