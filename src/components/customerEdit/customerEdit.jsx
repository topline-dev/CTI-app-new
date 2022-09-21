import "../../App.css";
import React, { useEffect, useState,  } from "react";
import { Button, Grid, Stack } from "@mui/material";
import ButtonAppBar from "../customerRelated/Appbar";
import TemporaryDrawer from "../newcustomer/SideNav";
import CustForm from "../customerRelated/custForm/CustForm";
import { Formik, Form} from "formik";
import CategoryForm from "../customerRelated/categoryForm/CategoryForm";

import axios from "axios";

export default function CustomerEdit() {
  console.log("in customer detail");
  const  customerId = 10;
    let initialValues;
    let groupId;
 const [customerData,setCustomerData] =useState();
 const [isLoading,setIsLoading] = useState(true);
 
  const baseURL = `http://topline-cti.com:8082/customers/${customerId}`

  if (typeof  customerData != "undefined" && isLoading===true  ) { 
  setIsLoading(false);
}

  //This will work like componentDidMount
  useEffect(() => {
      axios.get(baseURL)
      .then((response) => {
          setCustomerData(response.data);
          console.log("in memo");
      })
  }, [])
 
  
// console.log(initialValues,"iiiii");
if(isLoading){
    console.log("isloading is false");
    return <div><h1>server not connected</h1></div>;
}
else{
    initialValues={custData:customerData};
    groupId=customerData.customerGroupId;
    console.log("isloading is true");
    return( <>
        <ButtonAppBar title="Customer Edit" />
        <TemporaryDrawer />
        <Formik
          enableReinitialize={true}
          initialValues={initialValues}
          // validationSchema={formValidation}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            console.log(values);
            //handleSubmit(values);
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form>
           
            <Grid container spacing={2} justifyContent={"center"}>
              <Grid item xs={12} md={5.5}>
                <CustForm  />
              </Grid>
              <Grid item xs={12} md={5.5}>
                <CategoryForm  customerId={customerId} groupId={groupId} />
                <br />
                <Stack direction="row" spacing={2}>
                  {/* <Button variant="contained" size="large" fullWidth>
                    Button 11
                  </Button> */}
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                  >
                    Save
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "error.light" }}
                    color="error"
                    size="large"
                    fullWidth
                  >
                    Cancel
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </>)
}
}
