import React, { useEffect, useState } from 'react'

import { makeStyles } from '@material-ui/core' 

const useStyles = makeStyles(()=>({
  form__confirmPassword_container: {
    width: "100%",
    marginLeft: "20px",
  },
  form__confirmPassword_box: {
    width: "85%",
    height: "25px",
    fontSize: "15px",
  },
  form__confirmPassword_text: {
    fontSize: "15px",
    marginBottom: 0,
    fontFamily: "Inter",
    marginTop: "20px",
  }

}))

const ConfirmPassword = (props) => {

  const classes = useStyles()
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
    <div className={classes.form__confirmPassword_container}>
      <h5 className={classes.form__confirmPassword_text} >Confirm Password</h5>
      <input 
        type="password" 
        className={classes.form__confirmPassword_box} 
        placeholder="Enter your Password again" 
        onChange={(event)=>{
          setConfirmPassword(event.target.value)
        }}
      />
    </div>
  )
}

export default ConfirmPassword
