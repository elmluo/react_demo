import React from 'react'
import {render} from 'react-dom'

import './static/css/common.less'

import Demo from './demo'

// 性能检测
import Perf from 'react-addons-perf'
// console.log(__DEV__);
if (__DEV__) {
	window.Perf = Perf
}

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
  <Rout/>, document.getElementById('root'))
