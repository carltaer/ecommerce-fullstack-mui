import React, { useState, useEffect} from 'react'

import "../../src/assets/fonts/static/Inter-Bold.ttf"

import { makeStyles } from '@material-ui/core'

import Button from "./Button"
import ConfirmPassword from "./ConfirmPassword"
import Email from "./Email"
import Names from "./Names"
import Password from "./Password"
import Sex from "./Sex"
import Terms from "./Terms"

const useStyles = makeStyles((theme)=>({
  root: {
    margin: "0 auto",
    width: "80%",
    padding: 50,
  },
  form__container: {
    maxWidth: "400px",
    margin: "0 auto",
  },
  form__text: {
    fontSize: "30px",
    fontFamily: "Inter",
    marginBottom: "0",
    
  },
  form__input_container: {
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    background: "gray",
    border: "3px solid rgba(0, 0, 0, 0.3)",
    borderRadius: "10px",
  },

}))


const Form = () => {

  const classes = useStyles()

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
      <div className={classes.form__container} >
        <h1 className={classes.form__text}>Getting Started</h1>
        <div className={classes.form__input_container}>
          <Email setIsEmailValid={setIsEmailValid} />
          <Password setIsPasswordValid={setIsPasswordValid} />
          <ConfirmPassword setIsConfirmPasswordValid={setIsConfirmPasswordValid} />
          <Names setIsNamesValid={setIsNamesValid} />
          <Sex setIsSexValid={setIsSexValid} />
          <Terms setIsTermsValid={setIsTermsValid} />
          <Button name="Log in" isEnabled={isFormValid} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Form

