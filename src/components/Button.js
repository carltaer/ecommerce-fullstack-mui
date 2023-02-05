import React, { useEffect } from 'react'
import "../assets/fonts/static/Inter-SemiBold.ttf"

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
  form__button: {
    margin: "0 auto",
    height: "30px",
    width: "60%",
    fontFamily: "Inter",
    fontSize: "15px",
    marginTop: "20px",
    marginBottom: "20px",
    borderRadius: "3px solid rgba(0, 0, 0, 0.5)",
  },
}))

const Button = (props) => {

  const classes = useStyles()

  useEffect(()=>{
   
  },[props])

  return (
    <button disabled={!props.isEnabled} className={classes.form__button}>{props.name}</button>
  )
}

export default Button
