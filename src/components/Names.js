import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core'
import "../assets/fonts/static/Inter-Light.ttf"

const useStyles = makeStyles((theme)=>({
  form__names_container: {
    width: "100%",
    marginLeft: "20px",
  },
  form__names_name: {
    fontSize: "15px",
    marginBottom: 0,
    fontFamily: "Inter",
    marginTop: "20px",
  },
  form__names_input: {
    width: "85%",
    height: "25px",
    fontSize: "15px",
  }
}))

const Names = (props) => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

    const validateNames = () => {
      if (firstName.length > 0 && lastName.length > 0){
        props.setIsNamesValid(true)
      }else{
        props.setIsNamesValid(false)
      }
   }

   const classes = useStyles()

   useEffect(validateNames, [firstName, lastName, props])



  return (
    <div className={classes.form__names_container} >
      <h5 className={classes.form__names_name}>Last Name</h5>
      <input 
        type="text" 
        className={classes.form__names_input}
        placeholder="Enter your last name" 
        onChange={(event)=>{
          setLastName(event.target.value)
        }}
      />
      <h5 className={classes.form__names_name}>First Name</h5>
      <input
         type="text"
         className={classes.form__names_input}
         placeholder="Enter your first name" 
         onChange={(event)=>{
          setFirstName(event.target.value)
         }}
      />
    </div>
  )
}

export default Names
