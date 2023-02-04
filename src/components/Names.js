import React, { useEffect, useState } from 'react'

const Names = (props) => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  


    const validateNames = () => {
      if (firstName.length > 0 && lastName.length > 0){
        props.setIsNamesValid(true)
      }else{
        props.setIsNamesValid(false)
      }
   }

   useEffect(validateNames, [firstName, lastName, props])



  return (
    <div>
      <h5>Last Name</h5>
      <input 
        type="text" 
        placeholder="Enter your last name" 
        onChange={(event)=>{
          setLastName(event.target.value)
        }}
      />
      <h5>First Name</h5>
      <input
         type="text"
         placeholder="Enter your first name" 
         onChange={(event)=>{
          setFirstName(event.target.value)
         }}
      />
    </div>
  )
}

export default Names
