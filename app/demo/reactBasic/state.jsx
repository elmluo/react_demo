import React from 'react'


class State extends React.Component {
  // state 需要用到constructor这个方法
  constructor(props, context) {
    super(props, context);
    this.state = {
      // 显示当前时间
      now: Date.now() // 默认值
    }
  }

  render () {
    return (
      <div>
        <p>时间是： {this.state.now}</p>
        <button onClick={this.clickHandler.bind(this)}>点我改变上面的时间戳</button>
      </div>
    )
  }

  clickHandler() {
    // 设置state的值的时候，要用this.setState,不能直接复制修改
    this.setState({
      now: Date.now()
    })
  }
}

export default State
