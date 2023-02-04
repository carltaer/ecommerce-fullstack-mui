import React, { useEffect } from 'react'
import { useState } from 'react'

const Terms = (props) => {
  const [checked, setChecked] = useState(false)

 const validateTerms = () => {
    if(checked){
      props.setIsTermsValid(true)
    }else{
      props.setIsTermsValid(false)
    }
 }
 useEffect(validateTerms, [checked, props])

  return (
    <div>
      <input 
        type="checkbox"
        value={checked}  
        onClick={()=>setChecked(!checked)}
      />
      <span>I AGREE TO THE TERMS AND AGREEMENT</span>
    </div>
  )
}

export default Terms
