// todo-list/index.js

import React, { Component } from 'react';
export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state={
      list: [
        '1','2'
      ]
    }
    this.handleTest2 = this.handleTest2.bind(this);
  }

  handleTest2() {
    console.log('test2');
  }

  componentDidMount() {}

  render() {
    const { list } = this.state
    return (
      <div className="todo-list">
        {list.map((todo, index) => (<div key={index}>
          <span className="item-text ">{todo}</span>
          <button onClick={() => handleTest2(index)} >done</button>
        </div>))}
      </div>
    );
  }
}


