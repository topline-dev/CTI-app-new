import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import ButtonAppBar from './components/Appbar';
import TemporaryDrawer from './components/SideNav';
import CustForm from './components/CustForm';
import CustCategoryForm from './components/CustCategoryForm';
import { Button, Grid, Stack, Typography,} from '@mui/material';

function App() {
  return (
    <>
      <ButtonAppBar title="New Customer"/>
      <TemporaryDrawer/>
      {/* <Typography variant='h3' align='center' style={{bold:"true",color:"#07a74a"}}>New Customer</Typography> */}
      <Grid container spacing={2} justifyContent={"center"}>
        <Grid item xs={12} md={5.6}>
          <CustForm/>
        </Grid>
        <Grid item xs={12} md={5.6}>
          <CustCategoryForm />
          <br/>
          <Stack direction="row" spacing={2} >
            <Button variant='contained' style={{backgroundColor:"#07a74a"}} size="large" fullWidth>Button 1</Button>
            <Button variant='contained' style={{backgroundColor:"#07a74a"}} size="large" fullWidth>Save</Button>
            <Button variant='contained' style={{backgroundColor:"red"}} size="large" fullWidth>Cancel</Button>
          </Stack>
        </Grid>
      </Grid>

    </>
  );
}

export default App;
