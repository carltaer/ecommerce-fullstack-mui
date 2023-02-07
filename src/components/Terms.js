import React, { useEffect } from 'react'
import { useState } from 'react'

import { makeStyles } from '@material-ui/core'

import "../assets/fonts/static/Inter-Light.ttf"

const useStyles = makeStyles((theme)=>({
  form__terms_container: {
    fontFamily: "Inter",
    marginTop: "12px",
  },
  form__terms_box: {
    height: "12px",
    width: "12px",
    marginLeft: "17px",
  },
  form__terms_link: {
    textDecoration: "none",
    paddingLeft: "5px",
    fontSize: "12px",
    fontWeight: "bold",
  }
}))

const Terms = (props) => {

  const classes = useStyles()

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
    <div className={classes.form__terms_container}>
      <input 
        type="checkbox"
        value={checked}  
        onClick={()=>setChecked(!checked)}
        className={classes.form__terms_box}
      />
      <span><a href='https://www.google.com' className={classes.form__terms_link}>I AGREE TO THE TERMS AND AGREEMENT.</a></span>
    </div>
  )
}

export default Terms
