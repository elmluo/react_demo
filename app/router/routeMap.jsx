import React from 'react'
import {Router, Route, }

class RouteMap extends React.Component {
  constructor() {

  }
  updateHandle() {
    console.log('每次router变换触发')
  }
  render() {
    return (
      <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>

        <Route path='/' component={App}>
          <IndexRoute component={Home}/>
          <Route path='list' component={Detail}/>
          <Route path='detail/:id' component={Detail}/>
          <Route path='*' component={NotFound}/>

        </Route>

      </Router>
    )
  }
}
