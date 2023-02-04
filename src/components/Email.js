import React, { useEffect, useState } from 'react'


const Email = (props) => {

  const [email, setEmail] = useState("")

  const validateEmail = () => {
    if(email.length > 0){
      props.setIsEmailValid(true)
    }else{
      props.setIsEmailValid(false)
    }
  }

  useEffect(validateEmail,[email,props])

  return (
    <div>
      <h5>Email</h5>
      <input 
        type="email" 
        placeholder="Enter your Email" 
        className="email" 
        onChange={(event)=>{
          setEmail(event.target.value)
        }}
      />
    </div>
  )
}

export default Email
