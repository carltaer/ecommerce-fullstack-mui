import React, { useEffect } from 'react'

const Button = (props) => {
  useEffect(()=>{
   
  },[props])

  return (
    <button disabled={!props.isEnabled}>{props.name}</button>
  )
}

export default Button
