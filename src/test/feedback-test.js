import React from 'react';
import { shallow } from 'enzyme';

import Feedback from '../components/feedback';

describe('Feedback', () => {
  it('Should render without crashing', () => {
    shallow(<Feedback />); ''
  });

  it('Renders the feedback', () => {
    let feedback = 'Feedback';
    let wrapper = shallow(<Feedback feedback={ feedback } />);
    expect(wrapper.contains(feedback)).toEqual(true);
  })

});
    
