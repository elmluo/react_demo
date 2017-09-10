import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Input from '../../components/input'
import List from '../../components/list'

class TodoList extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			todos: []
		}
	}
	render() {
		return (
			<div>
				<Input Input submitFn={this.submitFn.bind(this)}></Input>
				<List todos={this.state.todos} deleteFn={this.deleteFn.bind(this)}></List>
			</div>
		)
	}

	/**
	 * input提交:将将需要的内容自定义，拼入todos数组中
	 * @param  {string} value 输入框中内容
	 * @return {NUll}       [description]
	 */
	submitFn(value) {
		// 给数组添加id标识
		const id = this.state.todos.length;
		// input输入框组件提交时
		this.setState({
			todos: this.state.todos.concat({id: id, text: value})
		})
	}

	/**
	 * 列表项点击：删除对应点击项
	 * @param  {} id [description]
	 * @return {[type]}    [description]
	 */
	deleteFn(id) {
		let data = this.state.todos;
		this.setState({
			todos: data.filter(item => {
				if (item.id !== id) {
					// console.log(233333)
					return item
				}
			})
		})
	}
}

export default TodoList
