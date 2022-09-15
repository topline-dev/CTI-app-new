import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import CustomerDetailButton from './customerDetail/CustomerDetailButton';
import { Drawer } from '@mui/material';

const ButtonAppBar = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static">

        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Topline</Typography> */}
          <Link to="/home" style={{color:'white',textDecoration:'none',fontSize:'35px',width:'30%'}}>Topline</Link>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            {props.title}
          </Typography>
          {props.customerDetail ? <CustomerDetailButton/> : ""}


        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default ButtonAppBar;
