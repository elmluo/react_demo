import React from 'react'

class Map extends React.Component {
  render() {
    const arr = ['a', 'b', 'c']

    return (
      <div>
        {arr.map((item, index)=> {
          return <p key={index}> this is {item} </p>
        })}
      </div>
    )
  }
}

export default Map
