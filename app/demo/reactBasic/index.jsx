import React from 'react';

import Map from './Array.prototype.map';
import If from './if';
import Props from './Props'
import EventDemo from './eventDemo'
import State from './state'
import LifeHook from './lifeHook'

class ReactBasic extends React.Component {
  render() {
    return (
        <div>
          <hr/>
          <i style={{backgroundColor: "red"}}>循环渲染</i>
          <Map></Map>

          <hr/>
          <i style={{backgroundColor: 'red'}}>条件判断</i>
          <If></If>

          <hr/>
          <i style={{backgroundColor: 'red'}}>this.props 父->子 props不能修改</i>
          <Props person={{name: 'chaogege', sex: '男', height: '170', weight: '70'}}></Props>

          <hr/>
          <i style={{backgroundColor: 'red'}}>事件</i>
          <EventDemo></EventDemo>

          <hr/>
          <i style={{backgroundColor: 'red'}}>this.state</i>
          <State></State>

          <hr/>
          <i style={{backgroundColor: 'red'}}>生命周期</i>
          <LifeHook></LifeHook>
        </div>
    )
  }
}

export default ReactBasic
