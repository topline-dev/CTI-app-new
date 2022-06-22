import '../../App.css';
import React from 'react';
import { Button, Grid, Stack,} from '@mui/material';
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
        <Grid item xs={12} md={5.5}>
          <CustForm/>
        </Grid>
        <Grid item xs={12} md={5.5}>
          <CustCategoryForm />
          <br/>
          <Stack direction="row" spacing={2} >
            <Button variant='contained'  size="large" fullWidth>Button 1</Button>
            <Button variant='contained'  size="large" fullWidth>Save</Button>
            <Button variant='contained' sx={{backgroundColor:"error.light"}} color="error" size="large" fullWidth>Cancel</Button>
          </Stack>
        </Grid>
      </Grid>

    </>
  );
}