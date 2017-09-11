import React from 'react'

import ReactBasic from './reactBasic'
import TodoList from './perf_todoList'
import Hello from './react_redux_demo_hello/index'

class Demo extends React.Component {
  render() {
    return (
      <div>
          <h3>react基础部分</h3>
          <ReactBasic></ReactBasic>
          <h3>todoList</h3>
          <TodoList></TodoList>
          <h3>redux-demo</h3>
          <h3>react-redux-demo-hello</h3>
          <Hello></Hello>
      </div>
    )
  }

}

export default Demo
