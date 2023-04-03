import React from 'react';
import { shallow } from 'enzyme';
import CounterButton from './CounterButton';

it('Expect to render CounterButton', () => {
	expect(shallow(<CounterButton />)).toMatchSnapshot();
});

// #counter or [id='counter']
it('correnctly increments the counter', () => {
	const mockColor = 'red';
	const wrapper = shallow(<CounterButton color={mockColor} />);
	expect(wrapper).toMatchSnapshot();
	wrapper.find('#counter').simulate('click');
	wrapper.find('#counter').simulate('click');
	expect(wrapper.state()).toEqual({ count: 2 });
	wrapper.find('#counter').simulate('click');
	expect(wrapper.state()).toEqual({ count: 3 });
	wrapper.find('#counter').simulate('keypress');
	expect(wrapper.state()).toEqual({ count: 3 });
	expect(wrapper.props().color).toEqual('red');
});
