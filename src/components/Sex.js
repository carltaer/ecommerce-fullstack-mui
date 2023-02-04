import React, { useEffect, useState } from 'react'

const Sex = (props) => {
  const [sex, setSex] = useState(undefined)

  const validateSex = () => {
    if(sex === 0 || sex === 1){
      props.setIsSexValid(true)
    }else{
      props.setIsSexValid(false)
    }
  }
  
  useEffect(validateSex,[sex, props])

  return (
    <div>
      <h6>
        Sex: {sex !== undefined ? (sex === 0 ? "Male" : "Female") : "None Selected"}
      </h6>
      <span>Male</span>
      <input 
        type="radio"
        className="sex_male"
        name="sex"
        value={0}
        onChange={(e)=>{setSex(Number(e.target.value))}}
      />
      <span>Female</span>
      <input 
        type="radio"
        className="sex_female"
        name="sex"
        value={1}
        onChange={(e)=>{setSex(Number(e.target.value))}}
      />
    </div>
  )
}

export default Sex
