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

const useStyles = makeStyles((theme)=>({
  root: {
    margin: "auto",
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
  },
  trending__brand: {
    color: "steelblue",
  },

}))
 
const Trending = () => {
  const classes = useStyles()

  return (
    <Box component="section" className={classes.root}>
      <Typography variant="h4">Top Picks</Typography>
      <GridList cellHeight={250} className={classes.trending__container}>
        {items.map((item)=> ( 
          <GridListTile key={item._id} className={classes.trending__item}>
            <img src={item.image} alt={item.name} />
            <GridListTileBar
              className={classes.trending__info}
              title={<h1 className={classes.trending__name} >{item.name}</h1>}
              subtitle={
                <Link  to={`/item` + item._id}>
                  <div className={classes.trending__more}>
                    <h3 className={classes.trending__brand}>by {item.brand}</h3>
                    <h2 className={classes.trending__price}>${item.price}</h2>

                    <div className={classes.rating__container}>
                      <h3>
                        Rated {item.rating}
                        <StarIcon className={classes.rating__icon} />
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
