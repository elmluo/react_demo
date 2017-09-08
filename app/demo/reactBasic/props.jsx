import React from 'react'

class PropsDemo extends React.Component {
  render () {
    return (
      <div>
        <p>姓名：{this.props.person.name}</p>
        <p>性别：{this.props.person.sex}</p>
        <p>身高：{this.props.person.height}</p>
        <p>体重：{this.props.person.weight}</p>
      </div>
    )
  }
}

export default PropsDemo
