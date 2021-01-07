import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import { expect } from 'chai';
// import renderer from 'react-test-renderer'; // 快照测试

import TodoTextInput from './todoTextInput'

Enzyme.configure({ adapter: new Adapter() });
const noop = () => {}


it('sets the text prop as value', () => {
  const text = 'text'
  const wrapper = shallow(
    <TodoTextInput text={text} onSave={noop} />
  )
expect(wrapper.prop('value')).to.equal(text) })

it('applies the right class names', () => {
  const wrapper = shallow(
    <TodoTextInput editing newTodo onSave={noop} />
  )
expect(wrapper.hasClass('edit new-todo')).to.equal(true)
 })

//  it('renders correctly', () => {
//   const tree = renderer
//   .create(<TodoTextInput editing newTodo onSave={noop}/>)
//           .toJSON();

//   expect(tree).toMatchSnapshot();
// });

