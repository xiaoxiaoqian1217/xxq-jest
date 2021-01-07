import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import { expect } from 'chai';

import CustomeCom from './index'
import TodoTextInput from '@components/todoTextInput/todoTextInput'

Enzyme.configure({ adapter: new Adapter() });
it('renders three <Foo /> components', () => {
  const wrapper = shallow(<CustomeCom />);
  expect(wrapper.find(TodoTextInput)).to.have.lengthOf(1);
});
