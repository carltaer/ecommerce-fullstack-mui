import React from 'react'

import { 
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core"
import { Rating } from '@mui/material'


import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'

import { useParams } from "react-router-dom"
import items from '../../items'
import { blue, green, orange, red } from "@material-ui/core/colors"

const useStyles = makeStyles((theme)=>({
  root: {
    margin: "auto",
    width: "80%",
    padding: 50,
  },
  item__container: {
    paddingTop: 20,
    display: "flex",
  },
  icon__history: {
    color: "black",
    fontSize: "20px",
    margin: "20px 20px"
  },
  item__image: {
    maxWidth: "100%",
    border: "1px solid #e9e9e9"
  },
  item__brand: {
    marginLeft: 5,
  },
  item__description: {
    fontStyle: "italic",
    color: "black",
  },
  item__highlight: {
    backgroundColor: "#ffffd6",
    color: "black",
    display: "flex",
    flexDirection: "column",
  },
  item__presale: {
    textDecoration: "line-through",
    color: "#ccc",

  },
  item__price: {
    fontWeight: 700,

  },
  item__stock: {
    fontWeight: 700,

  },
  item__limited: {
    color: orange[600],
    fontWeight: 700,

  },
  item__out: {
    color: "red",
    fontWeight: 700,

  },
  hidden: {
    display: "none",
  },
  "@media only screen and (max-width: 900px)": {
    item__container: {
      flexDirection: "column",
    },
  },
}))

const Item = () => {

  const classes = useStyles()

  const { id } = useParams()
  const item = items.find(item => item._id === id)
  
  return (
    <>
    <Button
    onClick={() => {
      window.history.back();
    }}
    startIcon={<ChevronLeftIcon />}
    className={classes.icon__history}
    >
      Go Back
    </Button>
    <div className={classes.item__container_contents}>
    <Grid container spacing={3} className={classes.item__container}>
      <Grid item xs={6}>
        <img
          src={item.image}
          alt={item.name}
          className={classes.item__image}
        /> 
      </Grid>
      
      <Grid item xs={6} className={classes.item__info}>
        <Box>
          <Typography component="span">
            <Typography variant="h2">{item.name}</Typography>
            <Typography variant="h6" className={classes.item__brand}>
              by {item.brand}
            </Typography>
          </Typography>

            <Divider />
        </Box>
        <Typography variant="subtitle1" className={classes.item__description}>
          {item.description}
        </Typography>
      </Grid>
    </Grid>
    <Card className={classes.item__highlight} raised={true}>
      <CardContent>
        <Typography variant="h6" className={classes.item__price}>
          Price:{" "}
          <span
            className={
              item.presalePrice === item.price
                ? classes.hidden 
                : classes.item__presale
            }
            >
              ${item.presalePrice}
            </span>{" "}
            ${item.price}
        </Typography>
        <Typography
          component="h6"
          className={
            item.countInStock === 0
              ? classes.item__out
              :item.countInStock < 20
              ? classes.item__limited
              :classes.item__stock
          }
          >
            {item.countInStock === 0
              ? "Out of Stock"
              : item.countInStock < 20
              ? "In Stock: " + item.countInStock + " (Few Stocks Left)"
              : "In Stock: " + item.countInStock
            }
          </Typography>
      </CardContent>
      <CardActions className={classes.item__actions}>
        <Button
          style={{ color: green[600] }}
          startIcon={<AddShoppingCartIcon />}
          disabled={item.countInStock === 0}
        >
          Add to Cart
        </Button>
        <Button
          style={{ color: red[300] }}
          startIcon={<FavoriteIcon />}
        >
          Add to Wishlist
        </Button>
        <Button style={{ color: blue[400] }} startIcon={<ShareIcon />}>
          Share
        </Button>
      </CardActions>
    </Card>
    </div>
    <Box>
      <Divider />
      <Grid container spacing={1}>
        {item.numReviews > 0 ? (
          <React.Fragment>
            <Grid item>
              <Typography variant="subtitle2">
                Rating: {item.rating}
                <Rating
                  precision={0.5}
                  value={item.rating}
                  size="small"
                  readOnly
                />
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle2">
                ({item.numReviews} reviews)
              </Typography>
            </Grid>
          </React.Fragment>
        ) : (
          <Typography variant="subtitle2">No Ratings yet</Typography>
        )}
      </Grid>
    </Box>
    </>        
  )
}

export default Item
