import React from 'react'
import HighOrderComponent from './HighOrderComponent'

function HoverComponent({count,increment}) {
  console.log("HoverComponent",count);
  return (
    <div>
        <h1 className='text'>Hover me Count:-{count}</h1>
        <div className='center'>
      <button className='btn1' onMouseOver={increment}>Hover</button>
      </div>
    </div>
  )
}

export default HighOrderComponent(HoverComponent)
