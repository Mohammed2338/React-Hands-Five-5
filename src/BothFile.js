import React from 'react'
import ClickComponent from './ClickComponent'
import HoverComponent from './HoverComponent'
// import HighOrderComponent from './HighOrderComponent'

function BothFile() {
  return (
    <div className='container'>
    <h1 className='main'> HighOrderComponent</h1>
      <ClickComponent />
        <HoverComponent />
      </div>
  )
}

export default BothFile
