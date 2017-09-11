import React from 'react'
class C extends React.Component {
    render() {
        return (
            <div>
                <p>组件C</p>
                <button onClick={this.changeUserInfo.bind(this)}>点我同事修改用户信息</button>
            </div>
        )
    }
    changeUserInfo() {
        const actions = this.props.actions;
        actions.login({
            userid: '23333',
            city: '上海'
        })
    }
}

export default C