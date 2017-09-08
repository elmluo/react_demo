import React from 'react'

class LifeHook extends React.Component {
  constructor(props, context) {
    super(props, context);
    //1.getIni提State：初始化组件state数据
    this.state = {
      now: Date.now()
    }
  }

  render() {
    return(
      <div>
        <ol>
          <li> <span>1.getInitialState：初始化组件state数据</span> </li>
          <li> <span>2.render: 最常用的hook， 返回组件要渲染的模板</span> </li>
          <li> <span>3.componentDidMount： 组件第一次加载时渲染完成事件，一般在此获取网络数据。实际开始项目开发时，会经常用到</span> </li>
          <li> <span>4.shouldComponentUpdate: 主要用于优化，React的性能优化也是一方面</span></li>
          <li> <span>5.componentDidUpdate: 组件更新了之后出发的事件，一般用于事件的清空，并且更新数据。项目开发时，会经常用到</span></li>
          <li> <span>6.componentWillUnmount: 组件在销毁之前出发的事件，一般用于存储一些特殊信息，以及清理setTimeout事件等</span></li>
        </ol>
      </div>
    )
  }
}

export default LifeHook
