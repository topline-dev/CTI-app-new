import "../../App.css";
import React, { useEffect, useState } from "react";
import { Button, Grid, Stack } from "@mui/material";
import ButtonAppBar from "./Appbar";
import CustForm from "./custForm/CustForm";
import { Formik, Form } from "formik";
import CategoryForm from "./categoryForm/CategoryForm";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CustomerDetails() {
  console.log("in customer detail");
  const customerId = 3;
  let initialValues;
  let groupId;
  const [customerData, setCustomerData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const baseURL = `http://localhost:8082/customers/${customerId}`;

  if (typeof customerData != "undefined" && isLoading === true) {
    setIsLoading(false);
  }

  //This will work like componentDidMount
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setCustomerData(response.data);
      console.log("in memo");
    });
  }, []);

  // console.log(initialValues,"iiiii");
  if (isLoading) {
    console.log("isloading is false");
    return <div><h1>server not connected</h1></div>;
  } else {
    initialValues = { custData: customerData };
    groupId = customerData.customerGroupId;
    console.log("isloading is true");
    return (
      <>
        <ButtonAppBar title="Customer Detail" />
        {/* <TemporaryDrawer /> */}
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
                <CustForm mode="read" />
              </Grid>
              <Grid item xs={12} md={5.5}>
                <CategoryForm
                  mode="read"
                  customerId={customerId}
                  groupId={groupId}
                />
                <br />
                <Stack direction="row" spacing={2}>
                  {/* <Button variant="contained" size="large" fullWidth>
                    Edit
                  </Button> */}
                  {/* <Link to="/customerEdit">customer Edit</Link> */}
                  <Button as={Link} to="/customerEdit" variant="contained" size="large" fullWidth>
                    Edit
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </>
    );
  }
}
