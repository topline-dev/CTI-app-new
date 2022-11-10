import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button, Grid } from '@mui/material';
import { Box } from '@mui/system';


function CustomerDetailButton() {
  return (
    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
      

      <Button key="back" sx={{ color: '#fff' }}>
        <ArrowBackIosNewIcon />
      </Button>
      <Button key="back2" sx={{ color: '#fff' }}>
        <ArrowForwardIosIcon />
      </Button>
      <Button key="back3" variant="contained" sx={{ color: '#fff' }}>
        Edit
      </Button>

    </Box>
  )
}

export default CustomerDetailButton