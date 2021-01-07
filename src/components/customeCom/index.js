import React, { PureComponent } from 'react'
import TodoTextInput from '@components/todoTextInput/todoTextInput'
import { utilFun } from '@utils/index'
console.log('utilFun', utilFun)
export default class index extends PureComponent {
  render() {
    return (
      <div>
        <TodoTextInput onSave={() => {}}></TodoTextInput>
      </div>
    )
  }
}
