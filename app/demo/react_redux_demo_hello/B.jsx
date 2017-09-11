import React from 'react'
class B extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <span>组件B</span>
                <p>姓名：{this.props.userinfo.userid}</p>
                <p>城市：{this.props.userinfo.city}</p>
            </div>
        )
    }
}

export default B