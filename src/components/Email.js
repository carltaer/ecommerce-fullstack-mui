import React, { useEffect, useState } from 'react'

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(()=>({
  form__email_container: {
    width: "100%",
    marginLeft: "20px",
  },
  form__email_text: {
    fontSize: "15px",
    marginBottom: 0,
    fontFamily: "Inter",
    marginTop: "20px",
  },
  form__email_box: {
    width: "85%",
    height: "25px",
    fontSize: "15px",
  },
}))


const Email = (props) => {

  const classes = useStyles()

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
    <div className={classes.form__email_container}>
      <h5 className={classes.form__email_text}>Email</h5>
      <input 
        type="email" 
        placeholder="Enter your Email" 
        className={classes.form__email_box} 
        onChange={(event)=>{
          setEmail(event.target.value)
        }}
      />
    </div>
  )
}

export default Email
