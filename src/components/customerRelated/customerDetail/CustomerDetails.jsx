import "../../../App.css";
import React, { useEffect, useState, useRef, useMemo } from "react";
import { Button, Grid, Stack } from "@mui/material";
import ButtonAppBar from "../Appbar";
// import TemporaryDrawer from "../newcustomer/SideNav";
import CustForm from "../custForm/CustForm";
import { Formik, Form } from "formik";
import CustomerDetailCategory from "./Call Log/CustomerDetailCategory";
import { useLocation, useNavigate } from "react-router";
import { AxiosFetch } from "../../AxiosFetch";

export default function CustomerDetails() {
  const navigate = useNavigate();
  const axiosFetch = AxiosFetch();
  const location = useLocation();
  const customerId = location.state.customerId;
  const [isLoading, setIsLoading] = useState(true);
  const [initialValues, setInitialValues] = useState();
  let categoryobj = {};
  useEffect(() => {
    async function getData() {
      const response = await axiosFetch.get(`/customers/${customerId}`);
      if (response.status === 200) {
        console.log(response, "cust detail response");
        response.data.categoryData.map((data) => {
          categoryobj[data.itemId] = data.value;
        });
        setInitialValues({ ...response.data, categoryData: categoryobj });
        setIsLoading(false);
      }
    }
    getData();
  }, []);


  return isLoading ? (
    <div>Loading</div>
  ) : (
    <>
      {console.log(initialValues, "llll")}
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
          <Grid container spacing={1} margin={0.2} justifyContent={"center"}>
            <Grid item xs={12} md={4.5}>
              <CustForm mode="read" />
            </Grid>
            <Grid item xs={12} md={7.3}>
              <CustomerDetailCategory
                mode="read"
                groupId={initialValues.customerGroup.groupId}
              />
              <br />
              <Stack direction="row" spacing={2}>
                <Button
                  onClick={() => { navigate("/customerEdit", { state: { data: initialValues } }); }}
                  variant="contained"
                  size="large"
                  fullWidth
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "error.light" }}
                  color="error"
                  size="large"
                  onClick={() => {
                    navigate(-1);
                  }}
                  fullWidth
                >
                  Cancel
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </>
  );
}
