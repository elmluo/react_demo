import React from 'react'


class EventDemo extends React.Component {
  render() {
    return (
      <div>
        {/*render以外的函数拿不到this当前组件对象。所以在调用的时候bind一下*/}
        <button onClick={this.clickHandler.bind(this)} value="">点我点我</button>
      </div>
    )
  }

  clickHandler(e) {
    alert(Date.now());
  }
}

export default EventDemo
