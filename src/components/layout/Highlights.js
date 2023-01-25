import React from 'react'
import { Box, makeStyles, Typography } from "@material-ui/core"
import backgroundImage from "../../assets/img/shopping.jpg"


const useStyles = makeStyles((theme)=>({
  highlight:{
    margin: "auto",
    padding: 50,
    background: `url(${backgroundImage}) rgba(0, 0, 0, 0.1)`,
    backgroundSize: "cover",
    backgroundBlendMode: "multiply",
    backgroundPosition: "right",
    height: 400,
  },
  highlight__title: {
    textAlign: "center",
    fontSize: "4em",
    fontWeight: 900,
    textTransform: "uppercase",
    borderTop: "12px solid #ffdd08",
    borderBottom: "12px solid #ffdd08",
    width: 450,
    color: "#ffdd08",
    margin: "2% auto auto 8%",
    padding: "10px 0",
  },
}))

const Highlights = () => {
  const classes = useStyles()

  return (
    <Box component="section" className={classes.highlight}>
      <Typography component="h1" className={classes.highlight__title}>
        More than just a shop...
      </Typography>
    </Box>
  )
}

export default Highlights
