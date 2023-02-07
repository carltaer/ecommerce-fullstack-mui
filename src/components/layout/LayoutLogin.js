import React from 'react'
import FormLogin from '../FormLogin'
import image from "../../assets/img/form_background.jpg"

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(()=>({
  form__layoutLogin_container: {
    background: `url(${image})`,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    backgroundSize: "cover",
    backgroundBlendMode: "multiply",
    backgroundPosition: "right",
    height: "500px",
  },
}))

const LayoutLogin = () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <div className={classes.form__layoutLogin_container}>
        <FormLogin />
      </div>
    </React.Fragment>
  )
}

export default LayoutLogin
