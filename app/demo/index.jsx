import React from 'react'

import ReactBasic from './reactBasic'
import TodoList from './perf_todoList'

class Demo extends React.Component {
  render() {
    return (
      <div>
        <h3>react基础部分</h3>
        <ReactBasic></ReactBasic>
        <h3>todoList</h3>
        <TodoList></TodoList>
      </div>
    )
  }

}

export default Demo
