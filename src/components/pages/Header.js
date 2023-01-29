import React, { useState } from 'react'

import { 
    AppBar,
    Box,
    Button,
    IconButton,
    makeStyles,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
 } from "@material-ui/core"

 import FaceIcon from '@mui/icons-material/Face';
 import LocalMallIcon from '@mui/icons-material/LocalMall';
 import { Link } from 'react-router-dom';

 import "../../assets/fonts/static/Inter-ExtraBold.ttf"



 const useStyles = makeStyles((theme) => ({
    header__container: {
      justifyContent: "space-between",
    },
    header__button: {
      borderRadius: 0,
      margin: "0 10px",
      fontWeight: 700,
      color: "black",
    },
    header__button_icon: {
      fontSize: 20,
    },
    header__title: {
      fontFamily: 'Inter',
    },
    header__button_account: {
      borderRadius: 0,
      margin: "0 10px",
      fontWeight: 700,
      color: "black",
      fontSize: "15px",
      border: "1px solid black",
      fontFamily: 'Inter',
    },
    header__navfont: {
      textDecoration: "none",
      color: "#a9a9a9",
      fontSize: "20px"
    }
 }))

const Header = () => {
  const classes = useStyles();
  const [menu, setMenu] = useState(null)

  const handleClick = (event) => {
    console.log(event)
    setMenu(event.currentTarget)
  }

  const handleClose = () => {
    setMenu(null)
  }

  return (
    <Box component="header" className={classes.header}>
      <AppBar position="static" color="primary" elevation={0}>
        <Toolbar className={classes.header__container}>
          <Link to="/">
            <Typography variant="h1" className={classes.header__title}>
              JCT
            </Typography>
          </Link>
          <Box className={classes.header__button}>
            <IconButton className={classes.header__button_icon}>
              <Link to="/cart">
                <LocalMallIcon />
              </Link>
            </IconButton>
              <Button 
               aria-controls="account__menu"
               aria-haspopup="true"
               onClick={handleClick}
                startIcon={<FaceIcon />}
                variant="outlined"
                className={classes.header__button_account}
             >
               Account
              </Button>
            <Menu 
              id="account__menu"
              anchorEl={menu}
              open={Boolean(menu)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <Link to="/login" className={classes.header__navfont}>Login</Link>
              </MenuItem>
              <MenuItem onClick={handleClose} >
                <Link to="/registration" className={classes.header__navfont}>Sign up</Link>
              </MenuItem>
            </Menu> 
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
