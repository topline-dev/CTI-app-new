import "../../../App.css";
import React, { useEffect, useState, useRef, useMemo } from "react";
import { Button, Grid, Stack } from "@mui/material";
import ButtonAppBar from "../Appbar";
// import TemporaryDrawer from "../newcustomer/SideNav";
import CustForm from "../custForm/CustForm";
import { Formik, Form } from "formik";
import CategoryForm from "../categoryForm/CategoryForm";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";
import axiosClient from "../axios";

export default function CustomerDetails() {
	const navigate=useNavigate();
  // const { customerId } = useParams();
  const customerId = 1;
  const [isLoading, setIsLoading] = useState(true);
  const [customerData, setCustomerData] = useState();
  let categoryobj = {};
  let initialValues = {};
  useEffect(() => {
    async function getData() {
      const response = await axiosClient.get(`/customers/${customerId}`);
      if (response.status === 200) {
        setCustomerData(response.data);
        setIsLoading(false);
      }
    }
    getData();
  }, []);

  if (typeof customerData !== "undefined") {
    customerData.categoryData.map((data) => {
      categoryobj[data.itemId] = data.value;
    });
    initialValues = {
      custData: customerData,
      categoryData: categoryobj,
    };
  }
  const handleEditClick = () => {
	  console.log(navigate,"nnnn");
	  navigate("/testPage",{state:{testdata:initialValues}})
  };

  return isLoading ? (
    <div>Loading</div>
  ) : (
    <>
      <ButtonAppBar title="Customer Detail" customerDetail="true" />
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
                groupId={customerData.customerGroupId}
              />
              <br />
              <Stack direction="row" spacing={2}>
                <Button
                  onClick={handleEditClick}
                  variant="contained"
                  size="large"
                  fullWidth
                >
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
