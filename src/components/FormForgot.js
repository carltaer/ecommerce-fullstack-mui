import React from 'react'

import { useState, useEffect } from 'react'

import Button from "./Button"
import Email from "./Email"

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(()=>({
  root: {
    width: "80%",
    padding: "50px",
},
formlogin__container: {
    maxWidth: "400px",
    height: "100%",
    margin: "0 auto",
    color: "#626262",
    marginTop: 0,

},
formlogin__input_container: {
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    background: "rgb(250, 249, 246, 0.8)",
    border: "3px solid rgba(0, 0, 0, 0.3)",
    borderRadius: "20px 0 20px 0",
    marginBottom: "20px",
    paddingLeft: "20px",
},
formlogin__text: {
    display: 'flex',
    fontSize: "25px",
    fontFamily: "Inter",
    paddingTop: "20px",
    marginBottom: 0,
    color: "#E9DCC9",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    letterSpacing: "3px",
}
}))

const FormForgot = () => {
    const classes = useStyles()

    const [isEmailValid, setIsEmailValid] = useState(false)
    const [isFormValid, setIsFormValid] = useState(false)
  
  
  
    useEffect(()=>{
      setIsFormValid(
        isEmailValid)
    }, [
        isEmailValid, 
    ])

  return (
    <React.Fragment>
        <div className={classes.formlogin__container} >
          <h1 className={classes.formlogin__text}>Forgot Password</h1>
          <div className={classes.formlogin__input_container}>
            <Email setIsEmailValid={setIsEmailValid} />
            <Button name="Login" isEnabled={isFormValid} />
          </div>
        </div>
      </React.Fragment>
  )
}

export default FormForgot
