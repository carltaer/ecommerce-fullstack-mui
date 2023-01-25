import React from 'react'
import { Box } from '@material-ui/core'
import Trending from "../layout/Trending"
import Highlights from "../layout/Highlights"

const Landing = () => {
  return (
    <Box>
      <Highlights />
      <Trending />
    </Box>
  )
}

export default Landing
