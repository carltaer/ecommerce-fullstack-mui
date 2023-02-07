import React from 'react'
import FormForgot from '../FormForgot'

import image from "../../assets/img/form_background.jpg"

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(()=>({
  form__layoutForgot_container: {
    background: `url(${image})`,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    backgroundSize: "cover",
    backgroundBlendMode: "multiply",
    backgroundPosition: "right",
    height: "500px",
  },
}))

const LayoutForgot = () => {

  const classes = useStyles()

  return (
    <React.Fragment>
      <div className={classes.form__layoutForgot_container}>
        <FormForgot />
      </div>
    </React.Fragment>
  )
}

export default LayoutForgot
