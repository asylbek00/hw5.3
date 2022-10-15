import React from 'react'
import './Cardlayout.css'

function Cardlayout(props) {
  const classes = 'layout '+ props.className
  return (
    <div className={classes}>{props.children}</div>
  )
}

export default Cardlayout