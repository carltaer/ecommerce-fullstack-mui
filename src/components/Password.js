import React, { useEffect, useState } from 'react'

const Password = (props) => {
  const [password, setPassword] = useState("")

  const validatePassword = () => {
    if(password.length > 0) {
      props.setIsPasswordValid(true)
    }else{
      props.setIsPasswordValid(false)
    }
  }

  useEffect(validatePassword,[password, props])

  return (
    <div>
      <h5>Password</h5>
      <input type="password" 
        className="password" 
        placeholder="Enter your Password" 
        onChange={(event)=>{
          setPassword(event.target.value)
        }}
      />
    </div>
  )
}

export default Password
