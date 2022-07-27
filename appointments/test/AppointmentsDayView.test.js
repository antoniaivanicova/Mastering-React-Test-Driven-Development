import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import {Appointment, AppointmentsDayView} from '../src/AppointmentsDayView'
import ReactTestUtils from 'react-dom/test-utils'

describe('Appointment', function () {
    let customer = {}
    let container
    const component = <Appointment customer={customer} />

    beforeEach(() => {
        container = document.createElement('div')

    })

    const render = component => ReactDOM.render(component, container)

    const appointmentTable = () => container.querySelector('#appointmentView > table');

    it('should render a table', function () {
        render(<Appointment customer = {customer}/>)
        expect(appointmentTable()).not.toBeNull()
    });

    it('should render the customer first name', function () {
        customer = {firstName: 'Ashley'}


        render(<Appointment customer = {customer}/>)

        expect(appointmentTable().textContent).toMatch('Ashley')
    });

    it('should render the customer first name', function () {
        customer = {firstName: 'Michael'}

        render(<Appointment customer = {customer}/>)

        expect(appointmentTable().textContent).toMatch('Michael')
    });

    it('should render the customer last name', function () {
        customer = {lastName: 'TEST'}
        render(<Appointment customer = {customer}/>)

        expect(appointmentTable().textContent).toMatch('TEST')
    });

    it('should render the customers phone number', function () {
        customer = {phoneNumber: '0904050603'}
        render(<Appointment customer = {customer}/>)

        expect(appointmentTable().textContent).toMatch('0904050603')
    });

    it('should render the stylists name', function () {
        render(<Appointment customer = {customer} stylist = 'Jane'/>)
        expect(appointmentTable().textContent).toMatch('Jane')

    });

    it('should render the service', function () {
        render(<Appointment customer = {customer} service = 'strihanie'/>)
        expect(appointmentTable().textContent).toMatch('strihanie')
    });

    it('should render the notes', function () {
        render(<Appointment customer = {customer} notes = 'balayage'/>)
        expect(appointmentTable().textContent).toMatch('balayage')
    });

});


describe('AppointmentsDayView', function () {
    let container
    const today = new Date()
    const appointments = [
        {
            startsAt: today.setHours(12, 0),
            customer: {firstName: 'Ashley'}
        },
        {
            startsAt: today.setHours(13, 0),
            customer: {firstName: 'Michael'}
        }
    ]

    beforeEach(() => {
        container = document.createElement('div')
    })

    const render = component => {
        ReactDOM.render(component, container)

    }

    it('should render a div with the right id', function () {
        render(<AppointmentsDayView appointments={[]} />)
        expect(container.querySelector('div#appointmentsDayView')).not.toBeNull();
    });

    it('should render multiple appointments in an ol element', function () {

        render(<AppointmentsDayView appointments={appointments}/>)

        expect(container.querySelector('ol')).not.toBeNull()

        expect(container.querySelector('ol').children).toHaveLength(2)
    });

    it('should render each appointment in an li', function () {

        render(<AppointmentsDayView appointments={appointments}/>)

        expect(container.querySelectorAll('li')).toHaveLength(2)
        expect(container.querySelectorAll('li')[0].textContent).toEqual('12:00')
        expect(container.querySelectorAll('li')[1].textContent).toEqual('13:00')


    });

    it('should initially show a message saying there are no appointments today', function () {
        render(<AppointmentsDayView appointments={[]}/>)
        expect(container.textContent).toMatch('There are no appointments scheduled for today.')
    });

    it('should select the first appointment by default', function () {
        render(<AppointmentsDayView appointments={appointments}/>)
        expect(container.textContent).toMatch('Ashley')
    });

    it('should have a button element in each li', function () {
        render(<AppointmentsDayView appointments={appointments}/>)
        expect(container.querySelectorAll('li > button')).toHaveLength(2)
        expect(container.querySelectorAll('li > button')[0].type).toEqual('button')
    });


    it('should render another appointment when selected', function () {
        render(<AppointmentsDayView appointments={appointments} />)
        const button = container.querySelectorAll('button')[1]
        ReactTestUtils.Simulate.click(button)

        expect(container.textContent).toMatch('Michael')
    });

    it('should add toggled class when the button is selected', function () {
        render(<AppointmentsDayView appointments = {appointments}/>)

        const button = container.querySelectorAll('button')[1]
        ReactTestUtils.Simulate.click(button)
        expect(button.className).toMatch('toggled')

    });

    //Klemo
    it('should not add toggled class when the button is not selected', function () {
        render(<AppointmentsDayView appointments = {appointments}/>)

        const button = container.querySelectorAll('button')[1]
        ReactTestUtils.Simulate.click(button)
        expect(button.className).toMatch('')

    });
});


