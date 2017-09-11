import React from 'react'

class A extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <div>组件A</div>
                <p>姓名：{this.props.userinfo.userid}</p>
                <p>城市：{this.props.userinfo.city}</p>
            </div>
        )
    }
}



export default A