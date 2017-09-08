import React from 'react'
import {render} from 'react-dom'

import './static/css/common.less'

import Demo from './demo'

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
