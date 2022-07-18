import '../../App.css';
import React, { useEffect, useState,useRef } from 'react';
import { Button, Grid, Stack,} from '@mui/material';
import ButtonAppBar from './Appbar';
import TemporaryDrawer from './SideNav';
import CustForm from './CustForm';
import CustCategoryForm from './CustCategoryForm';
import { Formik,Form, Field,FastField, useFormikContext } from 'formik';
import CustomizeCategoryDetail from '../customizeCategory/CustomizeCategoryDetail';

export default function NewCustomerScreenIndex() 
{
const initialValues={
    custForm:{
      customerFirstName:"",customerLastName:"",customerFirstRuby:"",customerLastRuby:"",customerBirthday:"",customerEmail:[''],
      customerAddress1:"",customerZipCode:"",customerAddress2:"",customerAddress3:"",customerAddress4:"",
      customerProfession:"",customerAuthor:"",customerLastUpdate:"",customerMemo1:"",customerMemo2:"", customerSex:"", firstPersonInCharge:"",
      secondPersonInCharge:"",customerGroupId:"",customerProjectGroup:"",customerTelephone:[''],
  },
  contractInformationForm:{
    contractInformation:"",contractManagerNumber:"",
    contractPeriod :"",contractOrderDate:"",contractStartDate:"",
    contractInitialCost:"",contractCommission:"",contractInsurancePremium:"",contractNote:"",
    contractInsuranceCompany:"",contractProductName:"",
    contractStatus:"",contractPaymentMethod:"",contractHowToPay:"",
  }
  }
  const test4 = (props) =>{
    
    return(
      <>
        <CustCategoryForm {...props}/>
      </>
    )
  }
  const [grpTest,setGrpTest]=useState();
  const FormObserver = () => {
    const { values } = useFormikContext();
    useEffect(() => {
      console.log("FormObserver::values", values);
      setGrpTest(values.custForm.customerGroupId);
      console.log(grpTest,'grptest');
    }, [values.custForm.customerGroupId ]);
    return null;
  };

  
  return (
    <>
      <ButtonAppBar title="New Customer"/>
      <TemporaryDrawer/>
      <Formik
      //innerRef={ref}
      initialValues={initialValues}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
        console.log(values);
      }}
    >
      <Form>
        <FormObserver/>
      <Grid container spacing={2} justifyContent={"center"}>
        <Grid item xs={12} md={5.5}>
          <CustForm />
        </Grid>
        <Grid item xs={12} md={5.5}>
          {/* <CustomizeCategoryDetail/> */}
          <CustCategoryForm data={grpTest} /> 
          <br/>
          <Stack direction="row" spacing={2} >
            <Button variant='contained'  size="large" fullWidth>Button 11</Button>
            <Button type='submit' variant='contained'  size="large" fullWidth>Save</Button>
            <Button variant='contained' sx={{backgroundColor:"error.light"}} color="error" size="large" fullWidth>Cancel</Button>
          </Stack>
        </Grid>
      </Grid>
      </Form>
    </Formik>   
    </>
  );
}
