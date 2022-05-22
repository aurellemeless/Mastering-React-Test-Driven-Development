import React from 'react';
import ReactDOM from 'react-dom';
import { Appointment } from '../src/Appointment'

describe('Appointment', ()=>{
    let customer;
    let container;
    beforeEach(()=> {
        container = document.createElement('div');
    })
    const render = component => ReactDOM.render(component, container);

    it('Renders the customer first name', ()=> {
        customer = { firstName : 'Ashley'};
        const component = <Appointment customer={customer}/>;
        render(component, container);
        expect(container.textContent).toMatch('Ashley');
    });
    it('Renders another customer first name', ()=> {
        customer = { firstName : 'Jordan'};
        const component = <Appointment customer={customer}/>;
        render(component, container);
        expect(container.textContent).toMatch('Jordan');
    });
});