import React from 'react';
import { shallow } from 'enzyme';

import GuessCount from './guess-count';

describe('GuessCount', () => {
  it('Gueescount should render', () => {
    shallow(<GuessCount />);
  });

  it('should display count', () => {
    let count = 3;
    let wrapper = shallow(<GuessCount guesscount={ count } />);
    expect(wrapper.contains(count)).toEqual(true);
  });
    
});

