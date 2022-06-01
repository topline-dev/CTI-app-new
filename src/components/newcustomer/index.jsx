import '../../App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button, Grid, Stack, Typography,} from '@mui/material';
import ButtonAppBar from './Appbar';
import TemporaryDrawer from './SideNav';
import CustForm from './CustForm';
import CustCategoryForm from './CustCategoryForm';

export default function NewCustomerScreenIndex() {
  return (
    <>
      <ButtonAppBar title="New Customer"/>
      <TemporaryDrawer/>
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
