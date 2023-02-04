import React, { useState, useEffect} from 'react'
import Button from "./Button"
import ConfirmPassword from "./ConfirmPassword"
import Email from "./Email"
import Names from "./Names"
import Password from "./Password"
import Sex from "./Sex"
import Terms from "./Terms"


const Form = () => {
  const [isFormValid, setIsFormValid] = useState(false)
  const [isEmailValid, setIsEmailValid] = useState(false)
  const [isPasswordValid, setIsPasswordValid] = useState(false)
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(false)
  const [isNamesValid, setIsNamesValid] = useState(false)
  const [isSexValid, setIsSexValid] = useState(false)
  const [isTermsValid, setIsTermsValid] = useState(false)



  useEffect(()=>{
    setIsFormValid(
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid &&
      isNamesValid &&
      isSexValid &&
      isTermsValid)
  }, [
      isEmailValid, 
      isPasswordValid, 
      isConfirmPasswordValid, 
      isNamesValid, 
      isSexValid, 
      isTermsValid
  ])

  return (
    <React.Fragment>
      <h1>Getting Started</h1>
      <Email setIsEmailValid={setIsEmailValid} />
      <Password setIsPasswordValid={setIsPasswordValid} />
      <ConfirmPassword setIsConfirmPasswordValid={setIsConfirmPasswordValid} />
      <Names setIsNamesValid={setIsNamesValid} />
      <Sex setIsSexValid={setIsSexValid} />
      <Terms setIsTermsValid={setIsTermsValid} />
      <Button name="Log in" isEnabled={isFormValid} />
    </React.Fragment>
  )
}

export default Form

