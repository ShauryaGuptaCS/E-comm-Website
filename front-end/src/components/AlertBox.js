import React from 'react'

export default function AlertBox(props) {
  return (
    <>
    <div className='alertBox'>
        <h3>{props.message}</h3>
        <button onClick={props.onClose} className='alertBox-btn'>Close</button>
    </div>

    <div className="overlays"></div>
    </>
  )
}
