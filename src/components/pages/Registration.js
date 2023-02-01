import React from 'react'
import { FormControl } from '@material-ui/core'
import { InputLabel, Input } from '@mui/material'
import { makeStyles } from '@material-ui/core'

  const useStyles = makeStyles((theme)=>({
    root: {
      margin: "auto",
      pading: 50,
    },
    registration__container: {
      border: "1px solid black",
      margin: "0 auto",
      maxWidth: "500px",
    },
    registration__form: {
      border: "1px solid rgba(az)",
      margin: "0 auto",
      width: "500px",
    }
  }))

const Registration = () => {
  const classes = useStyles()

  return (
    <div className={classes.registration__container}>
      <FormControl className={classes.registration__form}>

        <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />

        <InputLabel htmlFor="my-input" placeholder='Enter your first name'>First Name</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />

        <InputLabel htmlFor="my-input" placeholder='Enter your first name'>Last Name</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />

        <InputLabel htmlFor="my-input" placeholder='Enter your first name'>Password</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
        
        <InputLabel htmlFor="my-input" placeholder='Enter your first name'>Confirm Password</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
      
      </FormControl>
    </div>
  )
}

export default Registration
