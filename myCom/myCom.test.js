import React from 'react';
import MyComponent from './myCom'
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import { expect } from 'chai';
Enzyme.configure({ adapter: new Adapter() });
it('allows us to set props', () => {
  const wrapper = shallow(<MyComponent includedProp="Success!" excludedProp="I'm not included" />);
expect(wrapper.prop('includedProp')).to.equal('Success!');
}); 
