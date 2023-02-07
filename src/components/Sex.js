import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core'
import "../assets/fonts/static/Inter-Light.ttf"

const useStyles = makeStyles((theme)=>({
  form__sex_container: {
    marginLeft: "10px",
    fontFamily: "Inter",
  },
  form__sex_text: {
    fontSize: "15px",
    marginBottom: "10px",
    marginLeft: "10px",

  },
  form__sex_choice: {
    marginBottom: "3px",
    marginLeft: "10px",
    fontSize: "12px",
  },
  form__sex_gender: {
    height: "12px",
    width: "12px",
  }
}))

const Sex = (props) => {
  const [sex, setSex] = useState(undefined)

  const classes = useStyles()

  const validateSex = () => {
    if(sex === 0 || sex === 1){
      props.setIsSexValid(true)
    }else{
      props.setIsSexValid(false)
    }
  }
  
  useEffect(validateSex,[sex, props])

  return (
    <div className={classes.form__sex_container}>
      <h6 className={classes.form__sex_choice}>
        Gender: {sex !== undefined ? (sex === 0 ? "Male" : "Female") : "None Selected"}
      </h6>
      <span className={classes.form__sex_text}>Male</span>
      <input 
        type="radio"
        className={classes.form__sex_gender}
        name="sex"
        value={0}
        onChange={(e)=>{setSex(Number(e.target.value))}}
      />
      <span className={classes.form__sex_text}>Female</span>
      <input 
        type="radio"
        className={classes.form__sex_gender}
        name="sex"
        value={1}
        onChange={(e)=>{setSex(Number(e.target.value))}}
      />
    </div>
  )
}

export default Sex
