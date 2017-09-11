import React from 'react'
import {render} from 'react-dom'
import './static/css/common.less'

import Demo from './demo'
// import reduxFn from './demo/redux-demo'
// reduxFn();

// 性能检测
import Perf from 'react-addons-perf'
// console.log(__DEV__);
if (__DEV__) {
	window.Perf = Perf
}

// react-redux封装好的Provider包裹在dom最外层
import { Provider } from 'react-redux'
import configureStore from './store/configureStore.js'
const store = configureStore();

class Rout extends React.Component {
  render() {
    return (
      <div>
        <p>hello world132456</p>
        <Demo></Demo>
      </div>
    )
  }
}

render(
    <Provider store={store}>
        <Rout/>
    </Provider>,
    document.getElementById('root')
);
