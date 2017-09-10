import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Input extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = {
      // 和input的value值同步
      value: ''
    }
  }
  render() {
    return (
      <div>
        <input style={{width: '100%', height: '40px', fontSize: '16px'}}
               value={this.state.value}
               onChange={this.changeHandler.bind(this)}
               onKeyUp={this.keyUpHandler.bind(this)}
        >
        </input>
      </div>
    )
  }
  changeHandler(e) {
    this.setState({
      //同步实时数据
      value: e.target.value
    })
  }
  keyUpHandler(e) {
    const value = this.state.value
    if (e.keyCode === 13 && value.trim()){
      // 提交并且清空数据
      // props接受从父组件传入的任何属性，包括传入的函数签名
      this.props.submitFn(value);
      // 同时清空input数据
      this.setState({
        value: ''
      })
    }
  }
}

export default Input
