import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(()=>({
  form__password_container: {
    width: "100%",
    marginLeft: "20px",
  },
  form__password_text: {
    fontSize: "15px",
    marginBottom: 0,
    fontFamily: "Inter",
    marginTop: "20px",
  },
  form__password_box: {
    width: "85%",
    height: "25px",
    fontSize: "15px",
  }
}))

const Password = (props) => {
  const classes = useStyles()

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
    <div className={classes.form__password_container}>
      <h5 className={classes.form__password_text}>Password</h5>
      <input type="password" 
        className={classes.form__password_box} 
        placeholder="Enter your Password" 
        onChange={(event)=>{
          setPassword(event.target.value)
        }}
      />
    </div>
  )
}

export default Password
