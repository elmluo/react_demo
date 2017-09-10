import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class List extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  render() {
    const dataList = this.props.todos;
    return (
      <div>
        <ul style = {{marginTop: '10px', fontSize: '20px', lineHeight: '20px',backgroundColor:'yellow'}}>
          {
            dataList.map((item, index)=> {
              return <li key={index} onClick={this.clickHandler.bind(this, item.id)}>{item.text}</li>
            })
          }
        </ul>
      </div>
    )
  }
  clickHandler(id) {
    this.props.deleteFn(id);
    // console.log(123456)
  }
}

export default List
