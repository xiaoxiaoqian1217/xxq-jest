import React from 'react';
import renderer from 'react-test-renderer'; // 快照测试
import TodoList from './todolist'
it('renders correctly', () => {
  const tree = renderer
  .create(<TodoList  />)
          .toJSON();

  expect(tree).toMatchSnapshot();
});