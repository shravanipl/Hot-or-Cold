import React from 'react';
import { shallow, mount } from 'enzyme';

import GuessList from './guess-list';
import { wrap } from 'module';

describe('Guesslist', () => {
	it('Guesslist should render', () => {
		shallow(<GuessList guesses={[]} />);
	});

	it('renders a list of guesses', () => {
		const values = [20, 34, 56];
		const wrapper = shallow(<GuessList guesses={values} />);
		const items = wrapper.find('li');
		expect(items.length).toEqual(values.length);
		values.forEach((value, index) => {
			expect(items.at(index).text()).toEqual(value.toString());
		});
	});
});
