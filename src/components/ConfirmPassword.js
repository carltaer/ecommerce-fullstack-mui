import React, { useEffect, useState } from 'react'

const ConfirmPassword = (props) => {
  const [confirmPassword, setConfirmPassword] = useState("")

  const validateConfirmPassword = () =>{
    if(confirmPassword.length > 0){
      props.setIsConfirmPasswordValid(true)
    }else{
      props.setIsConfirmPasswordValid(false)
    }
  }

  useEffect(validateConfirmPassword,[confirmPassword,props])

  return (
    <div>
      <h5>Confirm Password</h5>
      <input 
        type="password" 
        className="confirm_password" 
        placeholder="Enter your Password again" 
        onChange={(event)=>{
          setConfirmPassword(event.target.value)
        }}
      />
    </div>
  )
}

export default ConfirmPassword
