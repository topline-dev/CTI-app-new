import '../../App.css';
import React from 'react';
import { Button, Grid, Stack,} from '@mui/material';
import ButtonAppBar from './Appbar';
import TemporaryDrawer from './SideNav';
import CustForm from './CustForm';
import CustCategoryForm from './CustCategoryForm';
import { useState } from 'react';

export default function NewCustomerScreenIndex() {
// const [custGroup, setCustGroup]=useState(['aa','bb','cc','dd','xx']);
 const [isSubmit,setIsSubmit]=useState(false);
 const [formData,setFormData]=useState({});

 console.log(isSubmit);
  const finalform = (e) =>{
    console.log('finlll form');
  }
  return (
    <>
      <ButtonAppBar title="New Customer"/>
      <TemporaryDrawer/>
      <Grid container spacing={2} justifyContent={"center"}>
        <Grid item xs={12} md={5.5}>
          <form>
            <CustForm isSubmit={isSubmit} onChange={finalform} ons={(e) => setIsSubmit(e)} formdata={setFormData} />
            <CustCategoryForm isSubmit={isSubmit} formType='newCustomer' />
          </form>
          
        </Grid>
        <Grid item xs={12} md={5.5}>
          
          <br/>
          <Stack direction="row" spacing={2} >
            <Button variant='contained'  size="large" fullWidth>Button 11</Button>
            <Button variant='contained'  size="large" fullWidth onClick={() => setIsSubmit(true)}>Save</Button>
            <Button variant='contained' sx={{backgroundColor:"error.light"}} color="error" size="large" fullWidth>Cancel</Button>
          </Stack>
        </Grid>
      </Grid>

    </>
  );
}
