import React from 'react';
import { shallow ,mount} from 'enzyme';

import GuessForm from './guess-form';

describe('GuessForm', () => {
  it('GuessForm should render', () => {
    let wrapper = shallow(<GuessForm />);
    wrapper.find('input').hasClass('text').toEqual(true);
  });

  it('Should fire callback on form submit', () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm onMakeGuess={ callback } />);
    const value = 16;
    wrapper.instance().setEditing(true);
    wrapper.update();
    wrapper.find('input[type="text"]').instance().value = value;
    wrapper.simulate('submit');
    expect(callback).toHaveBeenCalledWith(value);
  });

  it('Should not fire with empty input', () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm onMakeGuess={ callback } />);
    wrapper.instance().setEditing(true);
    wrapper.simulate('submit');
    expect(callback).not.toHaveBeenCalled();
  });
})