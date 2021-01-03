import React from 'react';
import Test1 from './index'
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import { expect } from 'chai';

Enzyme.configure({ adapter: new Adapter() });

// it('renders correctly', () => {
//   const tree = renderer
//   .create(<Test1  />)
//           .toJSON();

//   expect(tree).toMatchSnapshot();
// });
it('allows us to set props', () => {
  const wrapper = shallow((<Test1 baz="11" />));
  expect(wrapper.prop('baz')).to.equal('11');

}); 