import React from 'react'
import Form from '../Form'

import image from "../../assets/img/form_background.jpg"

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
  form__layout_container: {
    background: `url(${image})`,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    backgroundSize: "cover",
    backgroundBlendMode: "multiply",
    backgroundPosition: "right",
  }

}))
const Layout = () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <div className={classes.form__layout_container}>
        <Form />
      </div>
    </React.Fragment>
  )
}

export default Layout
