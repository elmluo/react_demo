import React from 'react'

class If extends React.Component {
  render() {

    return (
      <div>
        {
          false ? <p>true</p> : <p>false</p>
        }
      </div>
    )
  }
}

export default If
