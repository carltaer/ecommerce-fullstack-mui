import React from 'react'
import { 
  Box, 
  makeStyles,
  Typography,
} from "@material-ui/core"
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar'

import items from "../../items"

import "../../assets/fonts/static/Inter-Medium.ttf"




const useStyles = makeStyles((theme)=>({
  root: {
    margin: "0 auto",
    width: "80%",
    padding: 50,

  },
  trending__container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    overflow: "hidden",
  },
  trending__item: {
    margin: "30px auto",
    maxWidth: 400,
    minWidth: 300,
    textShadow: "3px 3px 5px rgba(0, 0, 128, 1)",

  },
  trending__more: {
    height: 300,
    color: "#e0e0e0",
    fontSize: "12px",
    textDecoration: "none",
    fontFamily: "Inter",
  },
  rating__container: {
    color: "#ffdd08",
    margin: "30px 0",
    justifyContent: "space-between",
    alignContent: "flex-start",
    alignItems: "flex-start",
  },
  trending__name:  {
    margin: 0,
    padding: 0,
    fontSize: "25px",
    fontFamily: "Inter",
  },
  trending__brand: {
    marginBottom: "50px",
  }



}))
 
const Trending = () => {
  const classes = useStyles()

  return (
    <Box component="section" className={classes.root}>
      <Typography variant="h4">Top Picks</Typography>
      <GridList cellHeight={300} className={classes.trending__container}>
        {items.map((item)=> ( 
          <GridListTile key={item._id} className={classes.trending__item}>
            <img src={item.image} alt={item.name} />
            <GridListTileBar
              className={classes.trending__info}
              title={<h1 className={classes.trending__name} >{item.name}</h1>}
              subtitle={
                <Link  to={`./item/${item._id}`}>
                  <div className={classes.trending__more}>
                    <h3 className={classes.trending__brand}>by: {item.brand}</h3>
                    <h2 className={classes.trending__price}>${item.price}</h2>
                 
                    <div className={classes.rating__container}>
                      <h3>
                        Rated {item.rating}
                        <StarIcon className={classes.rating__icon} fontSize="10px" />
                        <div>({item.numReviews} Reviews)</div>
                        
                      </h3>
                    </div>
                  </div>
                </Link>
              }
              />
          </GridListTile>
        ))}
      </GridList>
              

    </Box>
  )
}

export default Trending
