import React from 'react'


//import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "../src/components/pages/Header"
import { Box, ThemeProvider } from "@material-ui/core"
import theme from "../src/theme"
import Landing from "./components/pages/Landing"
import Login from "./components/pages/Login"
import Registration from "./components/pages/Registration"
import Forgot from "./components/pages/Forgot"
import Cart from "./components/pages/Cart"
import Item from "./components/pages/Item"


const App = () => {

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Box component="main">
        <Header/>
          <Routes>
            <Route path="./" component={Landing} exact />
            <Route path="./login" component={Login} exact />
            <Route path="./register" component={Registration} exact />
            <Route path="./forgot" component={Forgot} exact />
            <Route path="./cart" component={Cart} exact />
            <Route path=". /item/:id" component={Item} />
          </Routes>
        </Box>
      </ThemeProvider>
    </Router>
  )
}

export default App
